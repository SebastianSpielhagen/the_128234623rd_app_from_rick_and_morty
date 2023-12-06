import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <CharacterList characters={characters} />
        </div>
    );
}

export default App;