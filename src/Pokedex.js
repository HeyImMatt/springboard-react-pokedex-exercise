import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemon}) => {
  return (
    <div className="Pokedex">
      {pokemon.map((p) => (
        <Pokecard
          id={p.id}
          pokemonName={p.name}
          pokemonType={p.type}
          pokemonExp={p.base_experience}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
        />
      ))}
    </div>
  );
};

export default Pokedex;
