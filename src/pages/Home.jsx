import {useEffect, useState} from 'react';
import VehicleDetails from '../components/VehicleDetails';
import  {getVehicles} from '../services/api';
//import "..css/Home.css";

function Home() {
    const [vehicleList, setVehicleList] = useState([]);
    const [searchedVehicles, setSearchedVehicles] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        async function loadVehicles() {
            const vehicles = await getVehicles();
            setVehicleList(vehicles);
            setFilteredList(vehicles);
        }
        loadVehicles();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchedVehicles);
        setSearchedVehicles("");
    }
    return (
        <>
         <div className="home">
                <form className="search-form"  onSubmit={handleSearch}>
                    <input type="text" className="search-input" value={searchedVehicles} onChange={(e) => setSearchedVehicles(e.target.value)} />
                    <button type="submit" className="search-button">Search</button>
                </form>
                </div>
                <div className="vehicle-list">
                    {vehicleList.map((vehicle) => (
                        <VehicleDetails key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>

        
        
        </>


)
}

export default Home;
