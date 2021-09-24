import './Collection.css'

export default function Collection(props) {
  const { collections }= props

  return (
    <div>
<div>
      <h1> MY COLLECTION </h1>
      {collections?.map(product => (
        <div key={product?.id}> <h1 className="favorites-h1">{product?.productName}</h1>
          <div className="fav-image-container">
            <img className="favorites-image" src={product?.imageURL}/>
            </div>
  </div>
      ))
      }
      </div>
    </div>
  )
}

