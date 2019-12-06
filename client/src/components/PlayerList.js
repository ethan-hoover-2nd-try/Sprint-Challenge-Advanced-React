import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({players}) => {
    
    return(
        <div className='player-lists' data-testid='player-list'>
            {players.map((player, index) => {
                return <PlayerCard key={index} {...player}/>
            })}
        </div>
    )
};

export default PlayerList;