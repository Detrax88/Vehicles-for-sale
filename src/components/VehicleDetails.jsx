import {useVehicleContext} from '../contexts/VehicleContext'

function VehicleDetails({vehicle}) {
    const {addtoFavorites, removeFromFavorites, isFavorite} = useVehicleContext()
    const favorite = isFavorite(vehicle.id)

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) 
            removeFromFavorites(vehicle.id);
         else 
            addtoFavorites(vehicle);
        
    }

    return (
        <>
        <div className="vehicle-details">
            <div className="vehicle-image">
                <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
            </div>



            <h2>{vehicle.make} {vehicle.model}</h2>
            <p>Year: {vehicle.year}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Mileage: {vehicle.mileage}</p>
            <p>Combustion: {vehicle.combustion}</p>
            <p>Type: {vehicle.type}</p>
            <p>Doors: {vehicle.doors ?? 'N/A'}</p>
            <p>Ccm: {vehicle.ccm ?? 'N/A'}</p>
            <p>Transmission: {vehicle.transmission ? 'Automatic' : 'Manual'}</p>
            <p>All-Wheel Drive: {vehicle.allWheelDrive ? 'Yes' : 'No'}</p>
            <p>Climate Control: {vehicle.climateControl ? 'Yes' : 'No'}</p>
            <p>Description: {vehicle.description}</p>

            <button className="favorite-button" onClick={onFavoriteClick}>
                {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>



        </div>
        </>
    )
    }
    
    export default VehicleDetails;