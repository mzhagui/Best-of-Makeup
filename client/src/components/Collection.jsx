import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './Collection.css'

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
<div>
      <h1> MY COLLECTION </h1>
      {collections.map(product => (
        <div> <h1 className="favorites-h1">{product.productName}</h1>
          <div className="fav-image-container">
            <img className="favorites-image" src={product.imageURL} />
            </div>
          {/* <button className="far fa-trash-alt" onClick={ handleClick}></button> */}
  </div>
      ))
      }
      </div>
    </div>
  )
}

