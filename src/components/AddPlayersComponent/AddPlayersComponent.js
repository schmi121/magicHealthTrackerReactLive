import React, { useState } from 'react';
import styles from './styles.module.css';

const AddPlayersComponent = props => {
    
    const [numOfPlayers, setNumberOfPlayers] = useState(0);

    const submitHandler = e => {
        e.preventDefault();
        props.initiate(parseInt(numOfPlayers));
    };

    const onChangeHandler = e => {
        setNumberOfPlayers(e.target.value);
    };

    return (
    <div className={styles.playerInputDiv}>
        <form>
            <p>Set the Number of Players</p>
            <div className={styles.playerInputForm}>
            <input type="number" onChange={onChangeHandler} name="numberOfPlayers" min="1" max="6" />
            <button type="submit" onClick={submitHandler}>
                Submit
            </button>
            </div>
        </form>
    </div>
    );
};

export default AddPlayersComponent;