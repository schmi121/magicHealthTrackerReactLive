import React, { useState } from 'react';
import styles from './styles.module.css';

const PlayerHealthTracker = props => {
    const [health, setHealth] = useState(40)
    const classstring = "flex row";

    const increaseHealthByOne = () => {
        setHealth(health + 1);
    }

    const increaseHealthByFive = () => {
        setHealth(health + 5);
    }

    const decreaseHealthByOne = () => {
        setHealth(health - 1);
    }

    const decreaseHealthByFive = () => {
        setHealth(health - 5);
    }

    return (  
      <div className={styles.flexContainer}>
        <div className={styles.playerContainer}>
            <div className={styles.playerName}>
                <p>{props.name || "player"}</p>
            </div>    
            <div className={styles.playerHealthContainer}>   
                <p className={styles.playerHealthNumber}>{health}</p>
            </div>
            <div className={styles.healthButton}>
                    <button onClick={increaseHealthByOne}>+1</button>
                    <button onClick={decreaseHealthByOne}>-1</button>
                    <button onClick={increaseHealthByFive}>+5</button>
                    <button onClick={decreaseHealthByFive}>-5</button>
            </div>
        </div>
      </div>  
	);
};

export default PlayerHealthTracker;