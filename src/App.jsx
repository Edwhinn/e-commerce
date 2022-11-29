import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckEmail from "./pages/CheckEmail";
import VerifiedEmail from "./pages/VerifiedEmail";
import SweatPants01 from "./pages/Products/SweatPants01";
import ProductList from "./pages/Products/ProductList";



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
      </Routes>
    </Router>
  )
};

export default App;