export default function Search(props) {

  return (
    <div>
      <form action="/makeup/Foundation" method="get">
        <label>
       Search products
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search favorites"
            name="" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
  )
}
