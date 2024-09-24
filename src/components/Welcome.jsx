import { useNavigate } from "react-router-dom";
import Contact from "./contact";
import dogs from "./dogs";

//const apiURL = 'https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758';



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
