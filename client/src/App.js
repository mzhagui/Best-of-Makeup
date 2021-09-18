
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import MakeupCategories from "./components/MakeupCategories"
import MakeupLists from "./components/MakeupLists"
import MakeupDetails from "./components/MakeupDetails"
import Create from "./components/Create"
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
<Route exact path="/makeup/:makeupLists">
    <MakeupLists/>
    </Route>
<Route exact path="/makeupLists:id">
    <MakeupDetails/>
    </Route>
<Route exact path="/new">
    <Create/>
    </Route>



    </div>
  );
}

export default App;
