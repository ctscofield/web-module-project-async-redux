import React from 'react';

const GameItem = (props)=> {

  return(
    <div key={props.games.dealID} className="container">
        <h2>{props.games.title}</h2>
            <img src={props.games.thumb} alt="games cover" />
            <div className="body">
                <p>Regular price: ${props.games.normalPrice}</p>
                <p>Steam sale price: ${props.games.salePrice}</p>
                <p>Discount: %{props.games.savings}</p>
                <p>Community Rating: {props.games.steamRatingText}</p>
            </div>   
    </div>);
}

export default GameItem;