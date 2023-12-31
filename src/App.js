import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Customer from "./components/Customer";
import Header from "./components/Header";
import Introduct from "./components/Introduct";
import Line from "./components/Line";
import Navbar from "./components/Navbar";
import Whybuy from "./components/Whybuy";
import Outstand from "./components/Outstand";
import Commit from "./components/Commit";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Introduct />
      <section id="Product">
        <Line />
        <Content1 />
        <Content2 />
        <Content3 />
      </section>
      <Customer />
      <Outstand />
      <section id="Blogs">
        <Whybuy />
        <Commit />
      </section>
    </>
  );
}

export default App;
