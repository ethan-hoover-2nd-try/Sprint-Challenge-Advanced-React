import React from 'react';

const PlayerCard = ({ name, country, searches }) => {
    
    return (
        <div className='player-card'>
            <div className='player-info'>
                <h2>{name}</h2>
                <h3>{country}</h3>
                <h3>{searches}</h3>
            </div>
        </div>
    );
};

export default PlayerCard;