import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Collection() {
  const [collections, setCollections] = useState([])
const params = useParams()

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(`${URL}/${params.id}`, config);
      if (localStorage.getItem("collections")) {
        const collectionArray = [...JSON.parse(localStorage.getItem("collections")),res.data.fields]
        localStorage.setItem("collections", JSON.stringify(collectionArray))
      } else {
        localStorage.setItem("collections", JSON.stringify([res.data.fields]))
      }
      setCollections(JSON.parse(localStorage.getItem("collections")))
    };
    fetchItem()   
  },[])

//   const handleSubmit =
//   e.preventDefault
// setCollections()
  return (
    <div>
      <h1> This is a collection </h1>
      {collections.map(product => (
        <p>{product.productName}</p>
      ))
      }
      
      
 
    </div>
  )
}

