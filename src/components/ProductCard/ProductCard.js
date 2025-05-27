import { Link } from "react-router-dom";
import styles from './ProductCard.module.css';

function ProductCard({ product }){
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>R$ {product.price}</p>
            <Link to={`/produto/${product.id}`} className={styles.link}>
                Ver detalhes
            </Link>
        </div>
    );
}

export default ProductCard;