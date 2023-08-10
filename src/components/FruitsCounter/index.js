/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-cont">
        <div className="bg-cont1">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="btn-cont">
            <button onClick={this.eatMango}>Eat Mango</button>
            <button onClick={this.eatBanana}>Eat Banana</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
