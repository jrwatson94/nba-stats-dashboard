import React, { useEffect, useState } from "react";
import axios from "axios";

const Headshot = (props) => {
    const [id, setId] = useState(null);

    const findID = (players,first,last) => {
        const player = players.find((player) => player.firstName === first && player.lastName === last);
        console.log(player)
        return parseInt(player.personId);
    }


    useEffect(() => {
        const fetchPlayerID = async () => {
            try{
                const { data: {league} } = await axios("https://data.nba.net/data/10s/prod/v1/2021/players.json");
                setId(findID(league.standard, props.firstname,props.lastname));
            }catch(e){
                console.error(e)
            }
        }
        fetchPlayerID()
    },[props.firstname,props.lastname])

    return(
        
        <div>
            
            {id ? 
                <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`}></img> 
            :"Loading..."
            }
        </div>
    )
}

export default Headshot;

