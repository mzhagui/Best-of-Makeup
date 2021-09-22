import axios from 'axios'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};


export default function EditTeam() {
  const [productName, setproductName] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [Category, setCategory] = useState("")
  const { id } = useParams()
  
  useEffect(() => {
    const fetchMakeup = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      const { fields } = res.data
      setproductName(fields.productName)
      setRating(fields.rating)
      setReview(fields.review)
      setimageURL(fields.imageURL)
      setCategory(fields.Category)
     
    };
    fetchMakeup();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      productName,
      rating,
      review,
      imageURL,
      Category,
     
    }

    const res = await axios.put(`${URL}/${id}`, { fields }, config)
    console.log(res)
  };
  return (
    <div>
      <form>
   
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
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
    <label>Review:</label>
         <input type="textarea"
          placeholder=" Write your review..."
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
        <button>Edit</button>
      </form>
      
    </div>
  )
}