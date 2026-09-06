import {useEffect} from 'react';

function SearchBar({sc}) {
    return (
        <>
        <div className="search-bar">
            <input type="text" onChange={(e) => sc(e.target.value)} placeholder="Search  for vehicles..." />
            <select className="search-select">
                <option value="">All Categories</option>
                <option value ="cars">Cars</option>
                <option value="boats">Boats</option>
                <option value="military">Military</option>
            </select>
            <button className="search-button">Go for it!</button>
            
            </div></>
    )
}

export default SearchBar;