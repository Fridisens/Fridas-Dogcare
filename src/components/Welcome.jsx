import { useNavigate } from "react-router-dom";
import Contact from "./contact";
import dogs from "./dogs";



const Welcome = ({ onShowDogs }) => {
    const navigate = useNavigate();

    const handleShowDogs = () => {
        onShowDogs();
        navigate('/dogs');
    };

    const handleShowContact = () => {
        navigate('/contact');
    };


    return (
      <section>
        <h1>WELCOME TO FRIDAS DOG CARE</h1>
        <button onClick={handleShowDogs}>SEE OUR DOGS</button>
        <button onClick={handleShowContact}>CONTACT</button>
      </section>
    );
  };
  
  export default Welcome;
