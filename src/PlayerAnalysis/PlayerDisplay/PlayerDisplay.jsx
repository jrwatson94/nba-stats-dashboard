import React from "react";
import Headshot from "./Headshot/Headshot";
import Stats from "./Stats/Stats";

const PlayerDisplay = (props) => {
    console.log(props)
    return(
        <>
            {
                props.player &&
                <div>
                    <Headshot firstname={props.player.firstname} lastname={props.player.lastname}></Headshot>
                    <p>{props.player.firstname} {props.player.lastname}</p>
                    <Stats player={props.player}></Stats>
                    
                </div>
            
            }
        </>
    )

}

export default PlayerDisplay;