import "./index.css";
import { Routes , Route} from 'react-router-dom'

import Navbar from "./component/Navbar";
//component
import Home from "./Pages/Home";
import Productspage from "./Pages/Productspage"
import About from "./Pages/About"
import Contact from "./Pages/contact"
import Fotter from "./component/Fotter";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Regester from "./Pages/regester";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/product"  Component={Productspage}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/about" Component={About}/>
        <Route path="/login" Component={Login}/>
        <Route path="/checkout" Component={Checkout}/>
        <Route path="./regester" Component={Regester}/>
      </Routes>
      <Fotter/>
    </>
  );
}

export default App;
