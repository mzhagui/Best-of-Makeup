
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import MakeupCategories from "./components/MakeupCategories"
import MakeupLists from "./components/MakeupLists"
import MakeupDetails from "./components/MakeupDetails"
import Create from "./components/Create"
import Footer from './components/Footer'
import Edit from "./components/Edit"
import Collection from './components/Collection';
import {useState} from 'react'
 

// const KEY = process.env.REACT_APP_AIRTABLE_KEY;
// const BASE = process.env.REACT_APP_AIRTABLE_BASE;


function App() {
  const [collections, setCollections] = useState([])
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
        <MakeupLists collections={collections}
          setCollections={setCollections}/>
    </Route>
<Route exact path="/makeup/products/:id">
    <MakeupDetails/>
    </Route>
<Route exact path="/new">
    <Create/>
      </Route>
<Route path="/makeup/products/:id/edit">  
    <Edit/>
      </Route>
<Route path="/Collection">
        <Collection collections={collections}
          setCollections={setCollections}/>
</Route>
      <Footer />
    </div>
  );
}

export default App;
