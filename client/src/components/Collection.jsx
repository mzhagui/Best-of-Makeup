import './Collection.css'

export default function Collection(props) {
  const { collections }= props
  return (
    <div>
<div className="fav-container">
      <h1 className="header-fav"> MY COLLECTION </h1>
        {collections?.map((product, index) => {
          return (
            <div className="fav-div"key={index}>
              <h1 className="favorites-h1">{product?.productName}</h1>
              <div className="fav-image-container">
                <img className="favorites-image" src={product?.imageURL} alt="favimage" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  
  )}

