
export default function Home() {
  return (
<div className="home-page">
  <div className="home-h1">
        <h1 className="h1">BEST OF MAKEUP</h1>
  </div>
      <div className="home-image-container">
          <img className="home-image"src="https://images.pexels.com/photos/4620838/pexels-photo-4620838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="backgroundimage"/>
      </div>
<div className="home-button-div">
      <form className="homebutton">
       <button formAction="/makeupCategories">SHOW ME</button>
        </form>
 </div>
      </div>
  )
}
