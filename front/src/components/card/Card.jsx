import '../card/Card.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';

export default function Card(props) {

 const dispatch = useDispatch();
 const myFavorites = useSelector( state => state.myFavorites);
 const [ isFav, setIsFav ] = useState(false);

 const handleFavorite = () => {
  if (isFav) {
    setIsFav(false);
    dispatch(removeFav(props.id));
  } else {
    setIsFav(true);
    dispatch(addFav(props)); // Pass the character object
  }
};

useEffect(() => {
  const isFavorite = myFavorites.some((fav) => fav.id === props.id);
  setIsFav(isFavorite);
}, [myFavorites, props]);

 return (
   <div className="card_container">
     {
       isFav ? (
          <button className='like-button' onClick={ handleFavorite }>❤️</button>
       ) : (
          <button className='like-button' onClick={ handleFavorite }>🤍</button>
       )
     }
     <button className='card_container_button' onClick={ props.onClose }>X</button>
     <img src={ props.image } alt={ props.name } />
     <Link to={ `/detail/${ props.id }` }>
       <h2>{ props.name }</h2>
     </Link>
     <h2>{ props.status }</h2>
     <h2>{ props.species }</h2>
     <h2>{ props.gender }</h2>
     <h2>{ props.origin }</h2>
   </div>
 );
}