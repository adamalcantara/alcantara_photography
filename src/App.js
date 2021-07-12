import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Nav"

//Import all the pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Portraits from "./Pages/Portraits/Portraits"
import Headshots from "./Pages/Headshots/Headshots"
import Weddings from "./Pages/Weddings/Weddings"
import Contact from "./Pages/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
