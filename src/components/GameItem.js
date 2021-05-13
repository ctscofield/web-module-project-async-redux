import React from 'react';

const GameItem = (props)=> {

  return(
    <tr key={props.games.dealID}>
        <h2>Title: {props.games.title}</h2>
            <img src={props.games.thumb} styles={{width: "100px"}} alt="games cover" />
            <div className="body">
                <p>Regular price: {props.games.normalPrice}</p>
                <p>Sale price: {props.games.salePrice}</p>
                <p>%{props.games.savings} discount</p>
                <p>Rating: {props.games.steamRatingText}</p>
            </div>   
    </tr>);
}

export default GameItem;