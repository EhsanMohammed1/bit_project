import "./index.css";

// components
import Navbar from "./frontend/component/Navbar";
import Hero from "./frontend/component/Hero";
import Carousel from "./frontend/component/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
