

export default function Home() {
  return (
    <div className="homepage">
      <h1 className="h1">BEST OF MAKEUP</h1>
      {/* <Link to="/makeupCategories"> <button>SHOW ME</button> </Link>
       */}
        <div className="imagediv">
<img src="https://images.pexels.com/photos/4620838/pexels-photo-4620838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="backgroundimage"/>
      </div>
      <form>
  <button formaction="/makeupCategories">SHOW ME</button>
</form>
      <footer>DRUGSTORE AND WALLET FRIENDLY</footer>
      </div>
  )
}
