function VehicleDetails({vehicle}) {

    function onFavoriteClick() {
        alert("Favorite clicked")
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
            <button className="favorite-button" onClick={onFavoriteClick}>
                Add to Favorites
            </button>
        </div>
        </>
    )
    }
    
    export default VehicleDetails;