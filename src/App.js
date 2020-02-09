import React, { useState } from 'react';
import CommanderHealthTrackerTitle from "./components/CommanderHealthTitle/CommanderHealthTrackerTitle";
import styles from './styles.module.css';
import PlayerHealthTracker from './components/PlayerHealthTracker/PlayerHealthTracker';
import AddPlayersComponent from './components/AddPlayersComponent/AddPlayersComponent';
import RandomizerComponents from './components/Randomizers/RandomizerComponents';

function App() {
  const [playerArr, setPlayerArr] = useState([]);
  const [amtPlayers, setAmtPlayers] = useState(0);

  const initiatePlayers = num => {
      let array;
      if (num < 1) {
        array = [<PlayerHealthTracker />];
      } else {
          array = new Array(num).fill();
          for (let index in array) {
              array[index] = <PlayerHealthTracker key={index++} name={`Player ${index}`} />;
          }
      }
      setAmtPlayers(num);
      setPlayerArr([...array]);
  };

  return (
    <React.Fragment>
      <CommanderHealthTrackerTitle />
      <div className={styles.randomizerButtons}>
      <RandomizerComponents numPlayers={amtPlayers} /> 
      </div>
      <AddPlayersComponent initiate={initiatePlayers}/>
        <div className={styles.playerFlexContainer}> 
          <div className={styles.players}>
            {playerArr}
          </div>
        </div>  
    </React.Fragment>
  );
};

export default App;