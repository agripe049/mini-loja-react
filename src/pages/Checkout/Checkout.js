import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../context/CarrinhoContext/CarrinhoContext";
import styles from './Checkout.module.css'

function Checkout(){
    const navigate = useNavigate();

    const { 
        carrinho, 
        removerDoCarrinho, 
        aumentarQuantidade, 
        diminuirQuantidade,
        setCarrinho // <- adicione isso
    } = useContext(CarrinhoContext);

    if(carrinho.length === 0) return <p>Seu carrinho está vazio.</p>;

    const total = carrinho.reduce((acc, item) => acc + item.price * item.quantidade, 0).toFixed(2);

    function finalizarCompra(){
        alert('Compra realizada com sucesso!');
        setCarrinho([]);//Limpa o carrinho
        navigate("/");
    }

    return(
        <div className={styles.container}>
            <h2>Seu carrinho:</h2>
            <ul className={styles.lista}>
                {carrinho.map((item) => (
                    <li key={item.id} className={styles.item}>
                        {item.title} R$ {item.price.toFixed(2)} x {item.quantidade}
                        <br />
                        <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                        <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                        <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h3 className={styles.total}>Total: R$ {total}</h3>
            <button className={styles.finalizarBtn} onClick={finalizarCompra}>
                Finalizar compra
            </button>
        </div>
    );
}

export default Checkout;