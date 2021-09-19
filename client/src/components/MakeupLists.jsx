import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Link} from 'react-router-dom'


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
  console.log(setCategoryList)
      // console.log(res.data.records)
    };

    listofMakeup();
  }, []);
  


  
  return (
    <div>
      {categoryList.map((list) => {
        return (
          <div>
            <Link to={`/makeup/products/${list.id}`}> <img src={list.fields?.imageURL} alt="aproduct"/> </Link>
            <h1>{list.fields.productName}</h1>
            <br/>
            <Link to="/new">Add your Product Favorites</Link>
        
 </div>
             
             
         
         
        );
            
      })}
    </div>
  )}

 
    