import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home/Home'
import ProductDetail from '../../pages/ProductDetail/ProductDetail'
import Checkout from '../../pages/Checkout/Checkout'
import NavBar from '../../components/NavBar/NavBar'


function AppRoutes(){
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/produto/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;