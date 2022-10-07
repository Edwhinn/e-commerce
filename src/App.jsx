import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return(
   
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
      </Routes>
    </Router>
  )
};

export default App;