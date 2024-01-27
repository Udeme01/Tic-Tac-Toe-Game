import { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  // created another state for the input...
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //   handles players clicks on 'edits' && 'saves'.
  function handleEdit() {
    // updates state based on previous state...
    setIsEditing((prevState) => !prevState);
  }

  //   onChange of playerNames - triggers function below
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {!isEditing ? (
            playerName
          ) : (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;

// Added a function that's triggered when the <button> is clicked.
// Changed isEditing to true in that function.
// Show the <span className='player-name'> only when isEditing is false.
// Show an <input> element if isEditing is true.
