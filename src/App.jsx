import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckEmail from "./pages/CheckEmail";
import VerifiedEmail from "./pages/VerifiedEmail";


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
        <Route path='/ProductList/Product' element={<Product/>}/>
      </Routes>
    </Router>
  )
};

export default App;