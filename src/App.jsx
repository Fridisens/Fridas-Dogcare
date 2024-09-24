
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import background from "./pictures/dogsAI.png";
import Dogs from './components/dogs';
import Contact from './components/contact';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import { useState } from 'react'

function App() {

  const [dogData, setDogData] = useState([]);

  const fetchDogs = () => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => response.json())
      .then(data => setDogData(data.record))
      .catch(error => console.error('Error fetching dog data:', error));
  };

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome onShowDogs={fetchDogs} />} />
        <Route path="/dogs" element={<Dogs dogData={dogData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dogs/:id" element={<DogInfo dogData={dogData} />} />
      </Routes>
    </Router>
  );
}

export default App;
