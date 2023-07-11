// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {changeColor: true}

  onClickButton = () => {
    this.setState(prevState => ({changeColor: !prevState.changeColor}))
  }

  render() {
    const {changeColor} = this.state
    const bgColor = changeColor ? 'dark-mode' : 'light-mode'
    const buttonText = changeColor ? 'Light mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${bgColor}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
