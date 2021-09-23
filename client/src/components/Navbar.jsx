import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export default function Navbar() {
  const {id} = useParams
  return (
    <div className="navbar">
      <ul>
      <li><Link to="/">Best of Makeup</Link></li>
        <li><Link to="/makeupCategories">Makeup Categories</Link></li>
      </ul>
      
    </div>
  )
}
