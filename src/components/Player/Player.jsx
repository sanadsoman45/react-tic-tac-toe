import { useState } from "react";

export default function Player({ playerName, playerSymbol, isActive, onChangeName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [initialName, setinitialName] = useState(playerName);

  function handleEditClick(){
    setIsEdit((isEditing)=> !isEditing);
    if(!initialName){
      setinitialName(playerName);
    }
    if(!isEdit){
      onChangeName(playerSymbol, playerName);
    }
  }

  const inputChange = (event)=>{
    console.log(event);
    const value = event.target.value;
    (value)? setinitialName(value):console.log('Please input a valid name.');
  }

  return (
    <li className={isActive? 'active':''}>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{initialName}</span>
        ) : (
          <input type="text" className="player-name" value={initialName} onChange={inputChange}/>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </li>
  );
}
