import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Bikes from "./components/Bikes/Bikes";
import Jobs from "./components/Jobs/Jobs";
import About from "./components/About Us/About";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/Bikes" component={Bikes} />
        <Route path="/Jobs" component={Jobs} />
        <Route path="/About" component={About} />
      </>
    </BrowserRouter>
  );
}

export default App;
