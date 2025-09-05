// WinOrLoseCard.js
import './index.css'
import {Component} from 'react'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLoseCard extends Component {
  render() {
    const {isWon, onClickPlayAgain, score} = this.props
    const imageURL = isWon ? winImage : loseImage
    return (
      <div className="winOrLose-container">
        <div className="winOrLose-text-container">
          <h1>{isWon ? 'You Won' : 'You Lose'}</h1>
          <p>{isWon ? 'Best Score' : 'Score'}</p>
          <p>{score}/12</p>
          <button type="button" onClick={onClickPlayAgain}>
            Play Again
          </button>
        </div>
        <div className="winOrLose-image-container">
          <img src={imageURL} alt="win or lose" />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
