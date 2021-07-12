import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Nav";

//Import all the pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portraits from "./Pages/Portraits/Portraits";
import Headshots from "./Pages/Headshots/Headshots";
import Weddings from "./Pages/Weddings/Weddings";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pageContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portraits" component={Portraits} />
          <Route exact path="/headshots" component={Headshots} />
          <Route exact path="/weddings" component={Weddings} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>
    </Router>

  );
}

export default App;
