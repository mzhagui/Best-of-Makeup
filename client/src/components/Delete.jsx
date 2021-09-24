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
  const handleDelete = async () => {
    await deleteList(props.id)
    props.setDeleted(prevState=>!prevState)
    
}
 const deleteList = async (id) => {
  const res = await axios.delete(`${URL}/${id}`,config)
  console.log(res.data)

 } 
  return (
    <div className="delete-div">
      <button className="far fa-trash-alt"  onClick={handleDelete}></button>
    </div>
  )
}
