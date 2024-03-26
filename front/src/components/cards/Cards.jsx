import { Card } from '../compindex/';
import '../cards/Cards.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className="cards_container">
      {
         characters.map(char => (
            <Card
    key={char.id} // This key is unique for each Card
    name={char.name}
    status={char.status}
    gender={char.gender}
    origin={char.origin.name}
    species={char.species}
    image={char.image}
    id={char.id}
    onClose={() => onClose(char.id)}
  />
         ))
      }
   </div>;
};