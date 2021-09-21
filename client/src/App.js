
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import MakeupCategories from "./components/MakeupCategories"
import MakeupLists from "./components/MakeupLists"
import MakeupDetails from "./components/MakeupDetails"
import Create from "./components/Create"
import Footer from './components/Footer'
// const KEY = process.env.REACT_APP_AIRTABLE_KEY;
// const BASE = process.env.REACT_APP_AIRTABLE_BASE;


function App() {
  return (
    <div className="App">
    <Navbar />
<Route exact path="/">
    <Home />
    </Route>
<Route exact path="/makeupCategories">
    <MakeupCategories />
    </Route>
<Route exact path="/makeup/:products">
    <MakeupLists/>
    </Route>
<Route exact path="/makeup/products/:id">
    <MakeupDetails/>
    </Route>
<Route exact path="/new">
    <Create/>
    </Route>
<Footer/>
    </div>
  );
}

export default App;
