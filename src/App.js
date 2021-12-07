import "./App.css";
import "./App.scss";
import Navbar from "./Components/Widgets/Navbar";
import Home from "./Home";
import About from "./Components/Pages/About";
import Links from "./Components/Pages/Links";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import TopNav from "./Components/Widgets/Top-Nav";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="layout">
      <TopNav />
      <Navbar />
      <main className="main">
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="slide">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" exact element={<About />} />
              <Route path="/Projects" exact element={<Projects />} />
              <Route path="/Links" exact element={<Links />} />
              <Route path="/Contact" exact element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
}

export default App;
