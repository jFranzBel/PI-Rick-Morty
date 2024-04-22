import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter((char));
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className="detail_container">
            <img src={character?.image} alt={character?.name} />
            <br />
            <br />
            <h1>Name - {character?.name}</h1>
            <p>Status - {character?.status}</p>
            <p>Species - {character?.species}</p>
            <p>Gender - {character?.gender}</p>
            <p>Origin - {character?.origin?.name}</p>
        </div>
    )
};

export default Detail;
