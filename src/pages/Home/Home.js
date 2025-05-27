import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Home.module.css'


function Home(){
    const [produtos,SetProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            SetProdutos(data);
            setCarregando(false);
        });
    }, []);

    if(carregando) return <p>Carregando produtos...</p>;

    return(
        <div className={styles.container}>
            {produtos.map((produto) => (
                <ProductCard key={produto.id} product={produto} />
            ))}
        </div>
    );
}

export default Home;