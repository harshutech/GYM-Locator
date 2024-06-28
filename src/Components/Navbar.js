import React from 'react'
import "./Landingpage/LandingPage.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
         <div className='navBar'>
        <nav className="navbar navbar-light justify-content-between">
          <Link className="navbar-brand bi bi-geo-alt-fill" to='/'>GymLocator Pro</Link>
          <form className="form-inline">
            <Link to='/register'>22
            <button className="btn  my-2 my-sm-0" type="submit">
              Register Free
            </button>
            </Link>

            <Link to="/login">  
            <button className="btn  my-2 my-sm-0" type="submit">
              Login Now
            </button>
            
            </Link>
          </form>
        </nav>
      </div>
    </div>
  )
}
