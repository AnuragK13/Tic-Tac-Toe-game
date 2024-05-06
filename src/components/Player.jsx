import { useState } from 'react';

function Player(props) {
    const [playerName, setPlayerName] = useState(props.name);
    const [isEditing, setIsEditing] = useState(false) ;

    function editNameHandler() {
        setIsEditing((editing) => !editing);
        
        if(isEditing) {
          props.onNameChange(props.symbol, playerName);
        }
    }

    function nameChangeHandler(event) {
      setPlayerName(event.target.value);
    }




  return (
    <li className={props.isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required value={playerName} onChange={nameChangeHandler} />}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={editNameHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
