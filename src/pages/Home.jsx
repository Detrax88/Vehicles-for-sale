import {useEffect, useState} from 'react';
import VehicleDetails from '../components/VehicleDetails';
import  {getVehicles} from '../services/api';
import SearchBar from '../components/SearchBar';
//import "..css/Home.css";

function Home() {
    const [searchedVehicles, setSearchedVehicles] = useState("");
    const [vehicles, setVehicles] = useState([]);
    
    
   
    useEffect(() => {
        async function loadVehicles() {
            const vehicleList = await getVehicles();
            setVehicles(vehicleList);
        }
        loadVehicles();
    }, []);

    const searchTerm = searchedVehicles.trim().toLowerCase();
    const filteredList = vehicles.filter((vehicle) =>
        [vehicle.make, vehicle.model, vehicle.year]
            .some((value) => String(value ?? '').toLowerCase().includes(searchTerm))
    );

    return (
        <>
        <SearchBar sc={setSearchedVehicles} />
        <div className="home"> 
        <div className="vehicle-list">
            {filteredList.map((vehicle) => (
                <VehicleDetails key={vehicle.id} vehicle={vehicle} />
            ))}
            {searchTerm && filteredList.length === 0 && (
                <p>No vehicles found for "{searchedVehicles}"</p>
            )}
        </div>
            </div>
        
        
        </>


)
}

export default Home;
