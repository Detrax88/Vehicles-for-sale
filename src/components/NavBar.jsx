import {Link} from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Vehicles for sale</h1>
            </div>
            <ul className="navbar-links">
                <Link to="/" className="nav-link" >Home</Link>
                <p></p>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;