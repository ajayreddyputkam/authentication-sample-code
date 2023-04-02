// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="list-container">
    <Link to="/" className="link-item">
      <li className="header-home">Home</li>
    </Link>
    <Link to="/about" className="link-item">
      <li className="header-about">About</li>
    </Link>
  </ul>
)

export default Header
