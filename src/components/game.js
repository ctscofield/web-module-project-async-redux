import { connect } from 'react-redux';
import React, { useEffect } from "react";
import { getGame } from "./../actions/index";
import GameItem from './GameItem';

const Game = (props) => {
    const { game } = props;
    console.log(game);

    useEffect((e) => {
        props.getGame();
    }, []);
    return (
        <div>
            {
                props.game.map(games=><GameItem key={games.dealID} games={games}/>)
            }
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
