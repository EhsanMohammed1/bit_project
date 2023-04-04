import "./index.css";
import Products from "./component/Products";
// components
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";
import Bestsells from "./component/Bestsells";
import Brands from "./component/Brands";
import Fotter from "./component/Fotter";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Products />
      <Bestsells />
      <Brands />
      <Fotter />
    </div>
  );
}

export default App;
