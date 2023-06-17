import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/Navbar";
import "./index.css";

//component
import About from "./Pages/About";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import Productspage from "./Pages/Productspage";
import Regeister from "./Pages/Regeister";
import Singleitem from "./Pages/Singleitem";
import Contact from "./Pages/contact";
import Fotter from "./component/Fotter";
//admin
import Createproduct from "./component/admin/Createproduct";
import Dashbord from "./component/admin/Dashbord";
import Products from "./component/admin/Products";
import Summery from "./component/admin/Summery";
import UpdateProduct from './component/admin/UpdateProduct';
import User from "./component/admin/User";
import productlist from "./component/admin/productlist";
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
          <Route path="products" Component={Products}>
            <Route index Component={productlist} />
            <Route path="create-product" Component={Createproduct} />
            <Route path="update-product/:productId" Component={UpdateProduct} />
          </Route>

          <Route path="summery" Component={Summery} />
          <Route path="users" Component={User} />
        </Route>
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
