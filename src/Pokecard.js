import React from "react";

const Pokecard = ({pokemonName, pokemonType, pokemonExp}) => {
  return (
    <div className="pokecard">
      <h5>{pokemonName}</h5>
      <img></img>
      <p>{pokemonType}</p>
      <p>{pokemonExp}</p>
    </div>
  )
}

export default Pokecard;