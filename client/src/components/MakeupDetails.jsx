import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router";
import './Details.css'
import StarRating from "./StarRating";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};
export default function MakeupDetails() {
  const [product, setProduct] = useState({})
  const { id } = useParams();
  
  useEffect(() => {
    const productMakeup = async () => {
      const res = await axios.get(`${URL}/${id}`, config);

      setProduct(res.data)
      console.log(res.data)
    }
    productMakeup();
  }, []);

  return (
    <div>
    <div className="detailsdiv">
      <h1 className="detailsheader">{product.fields?.productName}</h1>
        <img className="imagedetail" src={product.fields?.imageURL} alt="product" />
        
      <p className="rating">Rating: <StarRating rating={ product.fields?.rating} />  </p>
      <h4>Review
        <br />
        {product.fields?.review}</h4>
      </div>
      </div>
  )
}
