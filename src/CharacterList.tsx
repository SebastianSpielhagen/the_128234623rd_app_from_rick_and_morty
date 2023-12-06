import { Component } from "react";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    // Weitere Eigenschaften hinzufügen
}

interface CharacterListProps {
    characters: Character[];
}

class CharacterList extends Component<CharacterListProps> {
    render() {
        const { characters } = this.props;
        return (
            <div>
                {characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <h3>Name: {character.name}</h3>
                            <p>Death or Alive: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Gender: {character.gender}</p>
                            {/* Weitere Details anzeigen */}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CharacterList;