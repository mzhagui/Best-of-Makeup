import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import './MakeupLists.css'
import Delete from "./Delete"
import Collection from "./Collection";




const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function MakeupLists() {
  
  const [categoryList, setCategoryList] = useState([])
  const { products } = useParams()
  const [deleted, setDeleted]= useState(false)

  useEffect(() => {
    const listofMakeup = async () => {
      const res = await axios.get(URL, config);   
     setCategoryList(res.data.records.filter((list) => list.fields.Category === products ? list : ""))
      // console.log(res.data.records)
    };

    listofMakeup();
  }, [deleted, products]);
  
  return (
  <div>
      <div className="headers">
        <h1 className="headerlist"> The Best {products}s</h1>
        <Link className="linkAdd" to="/new">Add your Product Favorites</Link>
       
      </div>
      <div className="makeup">
      {categoryList.map((list) => {
        return (
         
          <div className="makeupcontainer" key={list.id}>
            <Link to={`/makeup/products/${list.id}`}> <img className="image" src={list.fields?.imageURL} alt="aproduct"/> </Link>
            <h1 className="listh1">{list.fields.productName}</h1>
            <div className="edit-delete">
            <Link to={`/makeup/products/${list.id}/edit`} className="fas fa-edit"></Link>
            <Delete
              setDeleted={setDeleted}
              id={list.id}
                category={list.fields?.Category} />
              <Link to={`/Collection`} className="fas fa-star" >  </Link>
        <Route path="/Collection">
                <Collection
                
   
                />
        </Route>
            </div>
          </div>
         
        
        );

      })}
      </div>
      
      </div>
  )}

 
    