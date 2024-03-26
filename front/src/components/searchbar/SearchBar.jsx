import { useState } from "react";

export default function SearchBar( props ) {
   const [id, setId] = useState('');
   const handleChange = (event)=> {
      setId(event.target.value);
   }

   return (
      <div>
         <input 
           type='search' 
           placeholder="Buscar un personaje"
           value={id}
           onChange={handleChange}
         />
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
