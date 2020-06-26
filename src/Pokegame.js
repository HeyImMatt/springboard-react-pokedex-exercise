import React from 'react';
import Pokedex from './Pokedex'
import pokemonData from './pokemonData';

const Pokegame = () => {
  const gameDeal = dealer();
  return (
    <>
      <Pokedex pokemon={gameDeal.hand1} player='Player 1' />
      <Pokedex pokemon={gameDeal.hand2} player='Player 2' />
    </>
  )
}


function randomNum(cardsLeft) {
  return Math.floor(Math.random() * cardsLeft)
}

function dealer() {
  let hand1 = [];
  let hand2 = [];
  const deckSize = pokemonData.length;

  for (let i = deckSize; i > 0; i--) {
    let idx = randomNum(i);
    let card = pokemonData[idx];
    hand1.length < deckSize / 2 ? hand1.push(card) : hand2.push(card);
    pokemonData.splice(idx, 1);
  }
  return {hand1, hand2}
}

export default Pokegame;