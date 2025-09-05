// NavBar.js
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="score-container">
        <p>Score: {currentScore}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {this.renderScores()}
      </nav>
    )
  }
}

export default NavBar
