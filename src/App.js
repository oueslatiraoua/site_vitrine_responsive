import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Section_1></Section_1>
      <Section_2></Section_2>
      <Section_3></Section_3>
      <Footer></Footer>
    </div>
  );
}

export default App;
