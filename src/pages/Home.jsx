import {useState} from 'react';
import VehicleDetails from '../components/VehicleDetails';
import SearchBar from '../components/SearchBar';
//import "../css/Home.css"; Kell majd dizájnos css file!

function Home() {
    const {SearchedVehicles, setSearchedVehicles} = useState("");

    const vehicleList = [
        { id: 1, name: 'Toyota Camry', model: 'LE', year: 2020, price: 25000 },
        { id: 2, name: 'Honda Civic', model: 'EX', year: 2019, price: 22000 },
        { id: 3, name: 'Ford Mustang', model: 'GT', year: 2021, price: 35000 },
        { id: 4, name: 'Chevrolet Malibu', model: 'LT', year: 2018, price: 20000 },
        { id: 5, name: 'Nissan Altima', model: 'SL', year: 2020, price: 27000 },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(SearchedVehicles);
        setSearchedVehicles("");
    }
    return (
        <>
            <div className="home">
                <form className="search-form"  onSubmit={handleSearch}>
                    <input type="text" className="search-input" value={SearchedVehicles} onChange={(e) => setSearchedVehicles(e.target.value)} />
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