import {useEffect} from 'react';
import '../css/SearchBar.css';

function SearchBar({sc}) {
    return (
        <>
        <div className="search-bar">
            <input type="text" onChange={(e) => sc(e.target.value)} placeholder="Search for vehicles, models" />
            <select className="search-select">
                <option value="">All Categories</option>
                <option value="cars">Cars</option>
                <option value="military">Military</option>                
            </select>
            <button className="search-button">Go for it!</button>
        </div>
            </>
    )
}

export default SearchBar;