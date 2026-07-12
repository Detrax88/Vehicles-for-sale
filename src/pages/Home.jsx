import {useEffect, useState} from 'react';
import VehicleDetails from '../components/VehicleDetails';
import SearchBar from '../components/SearchBar';
//import "../css/Home.css"; Kell majd dizájnos css file!

function Home({ favorites, toggleFavorite }) {
    const [searchedVehicles, setSearchedVehicles] = useState("");
    const vehicleList = [
        { id: 1, name: 'Toyota Camry', model: 'LE', year: 2020, price: 25000, Mileage: 15000 },
        { id: 2, name: 'Honda Civic', model: 'EX', year: 2019, price: 22000, Mileage: 20000 },
        { id: 3, name: 'Ford Mustang', model: 'GT', year: 2021, price: 35000, Mileage: 10000 },
        { id: 4, name: 'Chevrolet Malibu', model: 'LT', year: 2018, price: 20000, Mileage: 25000 },
        { id: 5, name: 'Nissan Altima', model: 'SL', year: 2020, price: 27000, Mileage: 18000 },
    ];
    const [filteredList, setFilteredList] = useState(vehicleList);

    useEffect(() => {
        const query = searchedVehicles.trim().toLowerCase();
        setFilteredList(
            query
                ? vehicleList.filter((jarmu) =>
                    jarmu.name.toLowerCase().includes(query) ||
                    jarmu.model.toLowerCase().includes(query)
                )
                : vehicleList
        );
    }, [searchedVehicles]);

    return (
        <>
            <SearchBar sc={setSearchedVehicles} />

            {filteredList.length > 0 ? (
                filteredList.map((jarmu) => (
                    <VehicleDetails
                        vehicle={jarmu}
                        key={jarmu.id}
                        isFavorite={favorites.some((item) => item.id === jarmu.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))
            ) : (
                <p>No vehicles match your search.</p>
            )}
        </>
    );
}

export default Home;