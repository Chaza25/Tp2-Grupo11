import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {location.pathname === "/" && <Home />}
      {location.pathname === "/nosotros" && <Nosotros />}
      <Footer />
    </div>
  );
}

export default App;
