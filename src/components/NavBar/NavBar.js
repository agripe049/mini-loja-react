import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext/CarrinhoContext";

function NavBar(){
    const { carrinho } = useContext(CarrinhoContext);


    return(
        <div className={styles.navbar}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/checkout'>Carrinho ({carrinho.length})</Link></li>
            </ul>
        </div>
    )
}
export default NavBar; 