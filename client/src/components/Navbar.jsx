import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
      <li><Link to="/">Best of Makeup</Link></li>
        <li><Link to="/makeupCategories">Makeup Categories</Link></li>
        <li><Link to="/Collection">My Collection </Link ></li>
      </ul> 
    </div>
  )
}
