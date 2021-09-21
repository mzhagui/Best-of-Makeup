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
    }
    productMakeup();
  }, [id]);

  return (
    <div>
    <div className="detailsdiv">
      <h1 className="detailsheader">{product.fields?.productName}</h1>
      <div className="details-container">
        <img className="imagedetail" src={product.fields?.imageURL} alt="product" />
      <div className="rating-review-container">
        <h3 className="rating">Rating <StarRating rating ={product.fields?.rating} /></h3>
            <h4 className="review-header">Review: </h4>
            
           <h4 className="review"> {product.fields?.review} </h4>
            </div>
        </div>
        </div>
      
      
    </div>
   

   
      
  )

}
