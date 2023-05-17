import "./index.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import "react-toastify/dist/ReactToastify.css";

//component
import Home from "./Pages/Home";
import Productspage from "./Pages/Productspage";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import Fotter from "./component/Fotter";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Singleitem from "./Pages/Singleitem";
import Notfound from "./Pages/Notfound";
import Regeister from "./Pages/Regeister";
//admin
import Dashbord from "./component/admin/Dashbord";
import Products from "./component/admin/Products";
import Summery from "./component/admin/Summery";
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product" Component={Productspage} />
        <Route path="/product/:id" Component={Singleitem} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/login" Component={Login} />
        <Route path="*" Component={Notfound} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/register" Component={Regeister} />

        <Route path="/admin" Component={Dashbord}>
          <Route path="products" Component={Products} />
          <Route path="summery" Component={Summery} />
        </Route>
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
