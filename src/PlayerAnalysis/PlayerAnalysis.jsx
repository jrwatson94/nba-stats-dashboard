import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

import PlayerMenu from './PlayerMenu/PlayerMenu';
import { AnalysisContainer } from './styles';
import { generateTeamList } from './util/teamList';

const PlayerAnalysis = (props) => {
    const [players,setPlayers] = useState([]);
    const [activePlayer,setActivePlayer] = useState(null);
    
    const handleSelect = (id) => {
        console.log("SELECTED")
        setActivePlayer(players[id]);
    }
    useEffect(() => {
        const fetch = async () => {
            const options = {
                method: "GET",
                url:`https://api-nba-v1.p.rapidapi.com/players/statistics?team=${props.teamID}&season=2021`,
                headers: {
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "6e7d640aa0msh09fe62601a80a66p17028ajsncfa0065b1ad6"
                }
            }
            try{
                const { data } = await axios.request(options);
                console.log(data.response)
                setPlayers(generateTeamList(data.response));
            }catch(e){
                console.error(e)
            }
        }
        // fetch()
    },[])

    return(
        <AnalysisContainer>
            <PlayerMenu players={players} handleSelect={handleSelect}></PlayerMenu>
            <PlayerDisplay player={activePlayer}/>
        </AnalysisContainer>
    )
}

export default PlayerAnalysis;