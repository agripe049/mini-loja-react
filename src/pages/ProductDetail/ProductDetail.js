import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from './ProductDetail.module.css';
import { CarrinhoContext } from "../../context/CarrinhoContext/CarrinhoContext";



function ProductDetail(){
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const { adicionarAoCarrinho } = useContext(CarrinhoContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduto(data);
                setCarregando(false);
            });
    }, [id]);

    if(carregando) return <p>Carregando produto...</p>;
    if(!produto) return <p>Produto não encontrado.</p>

    return(
        <div className={styles.container}>
            <img src={produto.image} alt={produto.title} className={styles.image} />
            <div className={styles.info}>
                <h2>{produto.title}</h2>
                <p className={styles.price}> R$ {produto.price}</p>
                <p>{produto.description}</p>
                <button className={styles.button} onClick={() => adicionarAoCarrinho(produto)}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}

export default ProductDetail;