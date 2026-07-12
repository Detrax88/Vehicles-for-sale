// import "../css/Favorites.css"; kell majd dizájnos css file!

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((vehicle) => (
          <div key={vehicle.id} className="favorite-item">
            <h2>{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Price: ${vehicle.price.toFixed(2)}</p>
            <button className="favorite-btn" onClick={() => toggleFavorite(vehicle)}>
              Remove from favorites
            </button>
          </div>
        ))
      ) : (
        <p>You don't have any favorites yet.</p>
      )}
    </div>
  );
}

export default Favorites;