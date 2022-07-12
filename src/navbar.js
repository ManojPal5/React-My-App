import {Link } from 'react-router-dom'

const Navbar = () => {
    
    return ( 
        <nav>
            <div className="navbar">
                <Link to="/Home"> Home </Link>
                <Link to="/About"> About </Link>
                <Link to="/Gallery"> Gallery </Link>
                <Link to="/Teams"> Teams </Link>
                <Link to="/Matches"> Match Details </Link>
            </div>          
        </nav>
    );
}
 
export default Navbar;