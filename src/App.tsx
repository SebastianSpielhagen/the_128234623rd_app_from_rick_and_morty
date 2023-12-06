import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';

function App() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error));
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <CharacterList characters={filteredCharacters} />
        </div>
    );
}

export default App;