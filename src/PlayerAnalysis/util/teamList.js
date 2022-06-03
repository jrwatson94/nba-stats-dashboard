export const averageOfArray = (ary) => {
    return ary.reduce((a,b) => a + b) / ary.length;
}

export const generateTeamList = (gameData) => {
    const roster = {};

    gameData.forEach((game) => {
        const id = game.player.id;
        if(roster[id]){
            if(game.points){
                roster[id] = {
                    ...roster[id],
                    points: [...roster[id].points, game.points],
                    assists:[...roster[id].assists, game.assists],
                    blocks:[...roster[id].blocks, game.blocks],
                    totReb: [...roster[id].totReb, game.totReb],
                    tpm: [...roster[id].tpm, game.tpm],
                    tpp: [...roster[id].tpp, parseFloat(game.tpp)],
                    fgp: [...roster[id].fgp, parseFloat(game.fgp)],
                    totalPoints: roster[id].totalPoints + game.points,
                    GP: roster[id].GP+1,
                }
            }
        }else{
            const playerObj = {
                firstname: game.player.firstname,
                lastname: game.player.lastname,
                teamName: game.team.name,
                teamLogo: game.team.logo,
                points: [game.points],
                assists:[game.assists],
                blocks:[game.blocks],
                totReb: [game.totReb],
                tpm: [game.tpm],
                tpp: [parseFloat(game.tpp)],
                fgp: [parseFloat(game.fgp)],
                totalPoints: game.points,
                GP:1,
            }
            roster[game.player.id] = playerObj;
        }
    })

    for(const player in roster){
        const playerObj = roster[player];
        for(const stat in playerObj){
            if(Array.isArray(playerObj[stat])){
                roster[player][`avg${stat}`] = averageOfArray(playerObj[stat])
            }
        }
    }
    return roster;
}