import { useState} from "react"
import axios from 'axios'
import { useHistory } from "react-router";
import Dropdown from 'react-bootstrap/Dropdown'


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};


export default function Create() {
  const [productName, setproductName] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [imageURL, setimageURL] = useState("")
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
     productName, rating, review, imageURL
    }
  const res = await axios.post(URL, {fields}, config)
    console.log(res.data)
    
    // history.push(`/makeup/${records.fields?.Category}`)
  }

  return (
    <div>
      <h1> We want to know what your favorites are! </h1>
      <br />


      {/* <Dropdown>
        <Dropdown.Toggle variant="success">
          Makeup Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#">Foundation</Dropdown.Item>
            <Dropdown.Item>Primer</Dropdown.Item>
          <Dropdown.Item >Concealer</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
     */}
      <br/>
      
      <form onSubmit={handleSubmit}>
       
        <select>
          <option value="foundation">Foundation</option>
          <option value="primer">Primer</option>
        </select>
        <br/> 

        <label>Product Name:</label>
        <input type="text"
          placeholder=" Enter Product Name"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />
      <br />
    <label>Rating:</label>
        <input type="number"
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
<label>Review:</label>
        <input type="text"
          placeholder=" Your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
<br/>
<label>Image URL:</label>
        <input type="text"
          placeholder= " Image Address"
          value={imageURL} 
          onChange={(e) => setimageURL(e.target.value)}
        />
        <br />
        
<button>Add My Favorite</button>
      </form>
    </div>
  )
}
