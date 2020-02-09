import React, { useState } from 'react';
import styles from './styles.module.css';

const RandomizerComponents = props => {
    
    const sixSidedDieArray = ['1', '2', '3', '4', '5', '6'];
    const coinFlipArray = ['Heads', 'Tails'];

    let randomDieRoll
    let randomCoinFlip

    const submitRandomHandler = e => {
        e.preventDefault();
        let randomNumber = new Array(props.numPlayers).fill().map((_, i) => i+1)[Math.floor(Math.random() * props.numPlayers)];
        alert(`Player ${randomNumber} goes first`);
    };

    function dieRoll() {
        randomDieRoll = sixSidedDieArray[Math.floor(Math.random() * sixSidedDieArray.length)];
    }

    const submitDieHandler = e => {
        e.preventDefault();
        dieRoll();
        alert (`The d6 rolls a ${randomDieRoll}`);
    };
    
    function flipACoin() {
        randomCoinFlip = coinFlipArray[Math.floor(Math.random() * coinFlipArray.length)];
    }

    const submitCoinHandler = e => {
        e.preventDefault();
        flipACoin();
        alert (`The coin lands on ${randomCoinFlip}`);
    };

    return (
    <div className={styles.randomizerButtonsDiv}>
        <button className={styles.randomizerButtonActual} onClick={submitRandomHandler}>Randomize Starting Player</button>
        <button className={styles.randomizerButtonActual} onClick={submitDieHandler}>Roll a d6</button>
        <button className={styles.randomizerButtonActual} onClick={submitCoinHandler}>Flip a coin</button>
    </div>
    )
};

export default RandomizerComponents;