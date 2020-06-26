import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemon, player}) => {
  const handExp = pokemon.reduce((acc, p) => {
    return acc + p.base_experience
  }, 0)
  return (
    <div className="Pokedex">
      <h4>{player} EXP Value: {handExp}</h4>
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
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
