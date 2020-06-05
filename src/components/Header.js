import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="row header-row">
  <div className="col-md-3 header-col">
  <nav>
  <Link to='/' className="header-link">
    <h1 className= "header">Reciplease</h1>
  </Link>
  </nav>
  </div>
  </div>
)

export default Header
