import { useState, useEffect } from 'react'


export default function Collection(props) {
  const [collections, setCollections] = useState([])
  const { list} = props;

  console.log(list)

  useEffect(() => {
    console.log(list)
    setCollections(prevState=>[
      ...prevState, list
    ])
  },[])

//   const handleSubmit =
//   e.preventDefault
// setCollections()
  return (
    <div>
      {collections.map(product => (
        <p>{product.fields.productName}</p>
      ))
      }
      
 
    </div>
  )
}

