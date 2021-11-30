// import './App.css';
import './App.scss';
import Navbar from './Navbar';
import Home from './Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router';

function App() {


  return (

    <Router>
      <div className="App">
  <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
</div>
    </Router>

  )
}

export default App;
