import './App.css';
import { About, Cards, Nav, Detail, Form, Favorites } from './components/compindex'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const username = "jona@jona.com";
    const password = "123456j";

    function login(userData) {
        const { email, password } = userData;
        if (email === username && password === password) {
            setAccess(true);
            navigate('/home');
        } else {
            console.error("Invalid username or password");
            setAccess(false);
        }
    }

    useEffect(() => {
        !access && navigate('/')
    }, [access]);

    const onSearch = (id) => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                const data = response.data;
                setCharacters(oldChars => [...oldChars, data]);
            })
            .catch(error => {
                console.error('Error fetching character:', error);
                window.alert('Error fetching character. Please try again later.');
            });
    };;

    // `https://rickandmortyapi.com/api/character/${id}` < remote api

    const onClose = (id) => {
        const updatedCharacters = characters.filter((char) => char.id !== id);
        setCharacters(updatedCharacters);
    };

    return (
        <div className='App'>
            <video autoPlay loop muted className='background-video'>
                <source src='./ricknmorty.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}
            <Routes>
                <Route path='/home' element={
                    <div className='content'>
                        <Cards characters={characters} onClose={onClose} />
                    </div>
                } />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:detailId' element={<Detail />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </div>
    );
}

export default App;