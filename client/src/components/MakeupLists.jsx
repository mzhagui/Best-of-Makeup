import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import './MakeupLists.css'
import Delete from "./Delete"


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
      {categoryList.map((item) => {
        return (
          <div className="makeupcontainer" key={item.id}>
            <Link to={`/makeup/products/${item.id}`}> <img className="image" src={item.fields?.imageURL} alt="aproduct"/> </Link>
            <h1 className="listh1">{item.fields.productName}</h1>
            <div className="edit-delete">
            <Link to={`/makeup/products/${item.id}/edit`} className="fas fa-edit"></Link>
            <Delete
                    setDeleted={setDeleted}
                    id={item.id}
                    category={item.fields?.Category} />
            <Link to={`/Collection/${item.id}`} className="fas fa-star" ></Link>
       
          </div>
          </div>
        );

      })}
        
      </div>
      
      </div>
  )}

 
    