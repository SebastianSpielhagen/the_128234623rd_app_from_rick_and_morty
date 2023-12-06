import {Component} from "react";

class CharacterList extends Component<{ characters: unknown }> {
    render() {
        const {characters: characters} = this.props;
        return <>
            <div>
                {characters.map((character) =>
                    (
                        <div key={character.id}>
                            <h3>Name: {character.name}</h3>
                            <p>Death or Alive: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Gender: {character.gender}</p>
                            {/* Weitere Details anzeigen */}
                        </div>
                    ))}
            </div>
        </>;
    }
}

export default CharacterList;