// import '../css/VehicleDetails.css'; kell majd dizájnos css file!

function VehicleDetails({ vehicle, isFavorite, toggleFavorite }) {
  return (
    <>
      <div className="vehicle-details">
        <h2>{vehicle.name}</h2>
        <p>Model: {vehicle.model}</p>
        <p>Year: {vehicle.year}</p>
        <p>Price: ${vehicle.price.toFixed(2)}</p>
        <p>Mileage: {vehicle.Mileage} miles</p>

        <button
          className={`favorite-btn ${isFavorite ? 'favorite-active' : ''}`}
          onClick={() => toggleFavorite(vehicle)}
        >
          {isFavorite ? '♥ Remove' : '♡ Add'}
        </button>
      </div>

      <div className="vehicle-info" />
    </>
  );
}

export default VehicleDetails;