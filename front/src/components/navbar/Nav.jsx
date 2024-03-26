import { SearchBar } from '../compindex/';
import '../navbar/Nav.css'
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-left"><h4>Rick and Morty</h4></div>
      <Link to='/home'>
      <button>Home</button>
      </Link>
      <Link to='/favorites'>
      <button>Favorites</button>
      </Link>
      <Link to='/about'>
      <button>About</button>        
      </Link>
      <Link to='/'>
      <button>Log out</button>        
      </Link>
      <div className="nav-right">
        <SearchBar onSearch={props.onSearch} />
      </div>
    </nav>
  );
}