import { useState} from "react"
import axios from 'axios'
import { useHistory } from "react-router";
import './Create.css'

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
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [Category, setCategory] = useState("")
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
     productName, rating, review, imageURL, Category
    }
  const res = await axios.post(URL, {fields}, config)
    console.log(res.data)
    
    
    history.push(`/makeup/${Category}`)
  }

  return (
    <div className="creatediv">
      <h1> We want to know what your favorites are! </h1>
      <br />
      
      <form onSubmit={handleSubmit}>

      <label>Makeup Category</label>
        <select value={Category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Category">Choose a Makeup Category</option>
          <option value="Primer">Primer </option>
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Powder">Powder</option>
          <option value="Bronzer">Bronzer</option>
          <option value="Blush">Blush</option>
          <option value="Eyeshadow">Eyeshadow</option>
          <option value="Eyeliner">Eyeliner</option>
          <option value="Mascara">Mascara</option>
          <option value="Lipstick">Lipstick</option>
        </select>
        <br/> 
        <label>Product Name:</label>
        <input type="text"
          autoFocus
          placeholder=" Enter Product Name"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />
      <br />
     <label>Rating:</label>
        <input type="number"
          value={rating}
          min="0"
          max="5"
          placeholder=" Rating 0 - 5"
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
    <label>Review:</label>
         <textarea type="text"
          placeholder=" Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)} >
        </textarea>
        <br/>
    <label>Image URL:</label>
        <input type="text"
          placeholder= " Image Address"
          value={imageURL} 
          onChange={(e) => setimageURL(e.target.value)}
        />
        <br />
        
<button className="createbutton">Add My Favorite</button>
      </form>
    </div>
  )
}
