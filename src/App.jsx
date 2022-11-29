import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckEmail from "./pages/CheckEmail";
import VerifiedEmail from "./pages/VerifiedEmail";
import SweatPants01 from "./pages/Products/SweatPants01";
import ProductList from "./pages/Products/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import RedShirt01 from "./pages/Products/RedShirt01";
import BlueDress01 from "./pages/Products/BlueDress01";



const App = () => {
  return(
   
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        <Route path='/checkemail' element={<CheckEmail/>}/>
        <Route path='/VerifiedEmail' element={<VerifiedEmail/>}/>
        <Route path='/ProductList/SweatPants01' element={<SweatPants01/>}/>
        <Route path='/ProductList/RedShirt01' element={<RedShirt01/>}/>
        <Route path='/ProductList/BlueDress01' element={<BlueDress01/>}/>
        <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
      </Routes>
    </Router>
  )
};

export default App;