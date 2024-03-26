import { useSelector } from "react-redux";
import './Favorites.css';

const Favorites = () => {
   const { myFavorites } = useSelector( state => state );
   console.log("myFavorites:", myFavorites);

   return(
      <div className="cards_container"> 
         {
            myFavorites.map(( props )=>{
               return(
                     <div className="card_container" key={props.id}>
                      <img src={ props.image } alt={ props.name } />
                      <h2>{ props.name }</h2>
                      <h2>{ props.status }</h2>
                      <h2>{ props.species }</h2>
                      <h2>{ props.gender }</h2>
                      <h2>{ props.origin }</h2> 
                     </div>
               )
            })
         }
      </div>
   )
};

export default Favorites;