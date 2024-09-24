import { useParams } from "react-router-dom";

const DogInfo = ({ dogData }) => {
    const { id } = useParams();
    const dog = dogData.find((dog) => dog.name === id);

    if (!dog) {
        return <p>Dog not found!</p>
    }

    return (
        <section>
            <h2>{dog.name}'s Information</h2>
            <div className="dog-info-card">
            <img src={dog.img} alt={dog.name} className="dog-info-image" />
            <div className="dog-info-details">
            <p>Breed: {dog.breed} </p>
            <p>Present: {dog.present ? 'At our Dogcare': 'Not here right now'} </p>
            <p>chipNumer: {dog.chipNumber} </p>
            <p>Owner: {dog.owner.name} </p>
            <p>Phonenumber: {dog.owner.phoneNumber} </p>
            </div>
        </div>
        </section>
    );
};

export default DogInfo;
