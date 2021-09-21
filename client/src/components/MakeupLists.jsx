import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from 'react-router-dom'
import  './Lists.css'


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
  
  useEffect(() => {
    const listofMakeup = async () => {
      const res = await axios.get(URL, config);
      // setLists(res.data.records);
     setCategoryList(res.data.records.filter((list) => list.fields.Category === products ? list : ""))
    // console.log(res.data.records.filter((list) => list.fields.Category === makeupLists ? list : ""))
      console.log(res.data.records)
    };

    listofMakeup();
  }, []);
  
  return (
  <div>
      <div className="headers">
        <h1 className="headerlist"> The Best {categoryList[0]?.fields?.Category}s</h1>
        <Link className="linkAdd" to="/new">Add your Product Favorites</Link>
      </div>
      <div className="makeup">
      {categoryList.map((list, index) => {
        return (
          <div className="makeupcontainer">
            <Link to={`/makeup/products/${list.id}`}> <img className="image" src={list.fields?.imageURL} alt="aproduct"/> </Link>
            <h1 className="listh1">{list.fields.productName}</h1>
               
          </div>
         
        
        );

      })}
      </div>
      
      </div>
  )}

 
    