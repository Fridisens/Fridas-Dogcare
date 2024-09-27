import { Link } from 'react-router-dom';
import { useState } from 'react';



const Dogs = ({ dogData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 10; // Dogs per side

  
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogData.slice(indexOfFirstDog, indexOfLastDog);

  // function to change to next page
  const nextPage = () => {
    if (currentPage < Math.ceil(dogData.length / dogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function to change to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
        
      <h2>Our Dogs</h2>
      {currentDogs.length > 0 ? (
        <div className="dogs-grid">
          {currentDogs.map((dog, index) => (
            <div key={dog.name} className="dog-card">
              <h3>{dog.name}</h3>
              <img src={dog.img} alt={dog.name} className="dog-image" />
              <p>Present: {dog.present ? ' Here':' Not here'} </p>
              <Link to={`/dogs/${dog.name}`}>More Info</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading dogs...</p>
      )}
      
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="pagination-text"> Page {currentPage} of {Math.ceil(dogData.length / dogsPerPage)} </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(dogData.length / dogsPerPage)}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Dogs;