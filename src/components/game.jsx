import React from 'react';
import Board from './board';

function calculateWinner(squares) {
    return
}
class Game extends React.Component {
    state = {
        history: [{ squares: Array(9).fill(null) }],
        stepNum: 0,
        xIsNext: true
    }
    handleClick = i => {
        const history = this.state.history.slice(0, this.state.stepNum + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        
        if(calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{ squares }]),
            stepNum: history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1> Tic Tac Toe </h1>
                <Board onClick={this.handleClick} squares={this.state.history[0]} />
            </div>
        )
    }
}
export default Game