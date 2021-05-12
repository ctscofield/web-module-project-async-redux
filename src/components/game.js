import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchFail, fetchGame } from "./../actions/index";

const Game = (props) => {
    const { game, isFetching, error } = props;

    useEffect(() => {
        props.fetchGame();
    }, []);

    const handleClick = () => {
        props.fetchGame();
    }

    return (
        <div>
            <h2>{game.title}</h2>
            <img src={game.thumb} alt="game cover" />
            <div className="body">
                <p>{game.normalPrice}</p>
                <p>{game.salePrice}</p>
                <p>{game.savings}</p>
                <p>{game.steamRatingText}</p>
                <a href={game.link}>Buy Game</a>
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {
        game: state.game,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchGame, fetchFail })(Game);
