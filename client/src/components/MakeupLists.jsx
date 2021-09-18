import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function MakeupLists() {
  const [lists, setLists] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const { makeupLists } = useParams()
  
  useEffect(() => {
    const listofMakeup = async () => {
      const res = await axios.get(URL, config);
      // setLists(res.data.records);
     setCategoryList(res.data.records.filter((list) => list.fields.Category === makeupLists ? list : ""))
    // console.log(res.data.records.filter((list) => list.fields.Category === makeupLists ? list : ""))
  console.log(setCategoryList)
      // console.log(res.data.records)
    };

    listofMakeup();
  }, []);
  

  // const categoryList = lists.filter((list) => list.fields.Category === makeupLists ? list : "")
  // console.log(categoryList)

  
  return (
    <div>
      {categoryList.map((list) => {
        return (
          <div>
             <img src={list.fields?.imageURL}/>
            <h1>{list.fields.productName}</h1>
            
 </div>
          
    
        );
      })}
    </div>
  )}

 
    