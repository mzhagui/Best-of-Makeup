import { useState} from "react"
import axios from 'axios'


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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
     productName, rating, review, imageURL
    }
  const res = await axios.post(URL, {fields}, config)
    console.log(res.data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text"
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
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
<br/>
<label>Image URL:</label>
        <input type="text"
          value={imageURL}
          onChange={(e) => setimageURL(e.target.value)}
        />


      </form>
    </div>
  )
}
