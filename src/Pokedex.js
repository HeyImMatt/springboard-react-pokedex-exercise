import React from 'react';
import pokemonData from './data';
import Pokecard from './Pokecard'

const Pokedex = () => {
  return (
    <div className="pokedex">
      <Pokecard></Pokecard>
    </div>
  )
}

export default Pokedex;