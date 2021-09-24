import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link} from 'react-router-dom'
import './MakeupLists.css'
import Delete from "./Delete"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function MakeupLists(props) {
  
  const [categoryList, setCategoryList] = useState([])
  const { products } = useParams()
  const [deleted, setDeleted] = useState(false)
  const [add, setAdd] = useState(false)
  const { collections, setCollections } = props
  const [itemId, setItemId] = useState("")
  useEffect(() => {
    const listofMakeup = async () => {
      const res = await axios.get(URL, config);
      setCategoryList(res.data.records.filter((list) => list.fields.Category === products ? list : ""))
    };

    listofMakeup();
  }, [deleted, products]);
  const handleCollection = (id) => {
    setAdd(prevState => !prevState)
    setItemId(id)
    alert("The item was added to My Collection")
  }
     

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(`${URL}/${itemId}`, config);
      if (localStorage.getItem("collections")) {
        const collectionArray = [...JSON.parse(localStorage.getItem("collections")),res.data.fields]
        localStorage.setItem("collections", JSON.stringify(collectionArray))
      } else {
        localStorage.setItem("collections", JSON.stringify([res.data.fields]))
      }
      setCollections(JSON.parse(localStorage.getItem("collections")))
    };
    
    if (itemId) {
      fetchItem() 
    }
    else {
      setCollections(JSON.parse(localStorage.getItem("collections")))
    }
  },[add])

  return (
  <div>
      <div className="headers">
        <h1 className="headerlist"> The Best {products}s</h1>
        <Link className="linkAdd" to="/new">Add your Product Favorites</Link>
      </div>
      <div className="makeup">
      {categoryList.map((item) => {
        return (
          <div className="makeupcontainer" key={item.id}>
            <Link to={`/makeup/products/${item.id}`}> <img className="image" src={item.fields?.imageURL} alt="aproduct"/> </Link>
            <h1 className="listh1">{item.fields.productName}</h1>
            <div className="edit-delete">
            <Link to={`/makeup/products/${item.id}/edit`} className="fas fa-edit"></Link>
            <Delete
                    setDeleted={setDeleted}
                    id={item.id}
                    category={item.fields?.Category} />
              <div onClick={()=> handleCollection(item.id)}><i className="fas fa-star"></i></div>
          </div>
          </div>
        )
      })}   
      </div>
      </div>
  )}

 
    