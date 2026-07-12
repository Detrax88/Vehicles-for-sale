import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (vehicle) => {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === vehicle.id);
      return exists
        ? current.filter((item) => item.id !== vehicle.id)
        : [...current, vehicle];
    });
  };

  return (
    <>
      <div className="NavBarDiv">
        <NavBar />
      </div>
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App 