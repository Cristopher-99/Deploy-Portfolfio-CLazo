// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
// import About from "./Views/About/About";
import Home from "./Views/Home/Home.jsx";
import Resume from "./Views/Resume/Resume.jsx";
import Projects from "./Views/Projects/Projects";
import Contact from "./Views/Contact/Contact.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
