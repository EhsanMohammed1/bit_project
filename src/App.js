import "./index.css";
import Products from "./component/Products";
// components
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Products/>
    </div>
  );
}

export default App;
