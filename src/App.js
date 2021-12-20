import "./App.css";
import "./App.scss";
import Home from "./Home";
import About from "./Components/Pages/About";
import Links from "./Components/Pages/Links";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import TopNav from "./Components/Widgets/TopNav";
import { TransitionGroup } from "react-transition-group";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Widgets/Navbar";

function App() {
  return (
    <motion.div
      className="layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TopNav />
      <Navbar></Navbar>
  
      <AnimatePresence exitBeforeEnter>
        <main className="main">
          <TransitionGroup>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" exact element={<About />} />
              <Route path="/Projects" exact element={<Projects />} />
              <Route path="/Links" exact element={<Links />} />
              <Route path="/Contact" exact element={<Contact />} />
            </Routes>
          </TransitionGroup>
        </main>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
