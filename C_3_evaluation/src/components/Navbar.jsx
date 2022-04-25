import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
      <div className="navbar">
        <Link style={{marginLeft:"10px"}} className="nav-home" to="/">
          Home
        </Link>
        <Link style={{marginLeft:"10px"}} className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link style={{marginLeft:"10px"}} className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        <Link style={{marginLeft:"10px"}} className="nav-logout" to="/logout">
          Logout
        </Link>
  
        <Link style={{marginLeft:"10px"}} className="nav-login" to="/login">
          Login
        </Link>
      </div>
    );
  };