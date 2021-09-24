import axios from 'axios'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

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
  const history = useHistory()
  
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
  }, [id]);

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
    history.push(`/makeup/products/${res.data.id}`)
  };

  return (
    <div className="edit-div">
      <h1>Make some changes to your product.</h1>
      <br/>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
    <label>Review:</label>
         <textarea type="text"
          placeholder=" Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}>
        </textarea>
        <br/>
    <label>Image URL:</label>
        <input type="text"
          placeholder= " Image Address"
          value={imageURL} 
          onChange={(e) => setimageURL(e.target.value)}
        />
        <br />
        <button className="edit-button">Save</button>
      </form>  
    </div>
  )
}