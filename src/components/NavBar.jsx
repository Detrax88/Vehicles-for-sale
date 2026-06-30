import {Link} from 'react-router-dom';
//import '../css/NavBar.css'; kell majd dizájnos css file!

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Vehicle Finder</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className="nav-link" >Home</Link></li>
                <li><Link to="/favorites" className="nav-link">Favorites</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;