import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <nav>
  <Link to='/' className="header-link">
    <h1 className= "header">Reciplease</h1>
  </Link>
  </nav>
)

export default Header
