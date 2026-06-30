import {usestate} from 'react';
// import '../css/VehicleDetails.css'; kell majd dizájnos css file!


function VehicleDetails({ vehicle }) {
    return (
        <>
            <div className="vehicle-details">
                <h2>{vehicle.name}</h2>
                <p>Model: {vehicle.model}</p>
                <p>Year: {vehicle.year}</p>
                <p>Price: ${vehicle.price.toFixed(2)}</p>
                <button className="favorite-btn">F</button>
            </div>

            <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <p>Model: {vehicle.model}</p> 
            </div>
        </>
    )
}

export default VehicleDetails;