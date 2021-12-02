import "./App.css";
import "./App.scss";
import Navbar from "./Components/Widgets/Navbar";
import Home from "./Home";
import About from "./Components/Pages/About";
import Links from "./Components/Pages/Links";
import Projects from "./Components/Pages/Projects";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import TopNav from "./Components/Widgets/Top-Nav";

function App() {
  return (
    <div className="layout">
      <TopNav />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Projects" exact element={<Projects />} />
          <Route path="/Links" exact element={<Links />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
