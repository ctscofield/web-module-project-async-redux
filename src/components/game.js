import { connect } from 'react-redux';
import React, { useEffect } from "react";
import { getGame } from "./../actions/index";

const Game = (props) => {
    const { game } = props;
    console.log(game);

    useEffect((e) => {
        props.getGame();
    }, []);
    return (
        <div>
            <h2>title{game.title}</h2>
            <img src={game.thumb} alt="game cover" />
            <div className="body">
                <p>${game.normalPrice}</p>
                <p>sale ${game.salePrice}</p>
                <p>%{game.savings}</p>
                <p>rating{game.steamRatingText}</p>
                <a href={game.link}>Buy Game</a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getGame })(Game);
