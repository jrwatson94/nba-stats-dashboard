import React from "react";

const PlayerMenu = (props) => {
    const renderOptions = (players) => {
        const htmlArray = [];
        for(const player in players){
            htmlArray.push(
                <option value={player}>{players[player].firstname} {players[player].lastname}</option>  
            )
        }
        return htmlArray;
    }

    return(
        <div>
            <p>Choose A Player:</p>
            <select onChange={(e) => props.handleSelect(e.target.value)}>
                {props.players ? renderOptions(props.players):"Loading..."}
            </select>
        </div>
    )
}

export default PlayerMenu;