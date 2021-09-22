import { useHistory } from "react-router";
import{useState} from 'react'
import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/BestofMakeup`

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Delete(props) {
  const history = useHistory()
  const [toggle, setToggle] = useState(false)
  const handleDelete = async () => {
    await deleteList(props.id)
    props.setDeleted(prevState=>!prevState)
    // history.push(`/makeup/${props.category}`);
}
 const deleteList = async (id) => {
  const res = await axios.delete(`${URL}/${id}`,config)
  console.log(res.data)
   setToggle(prevState => !prevState)
 } 
  return (
    <div className="delete-div">
      <button 
      className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  )
}
