// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked <span className="s1">{count}</span>Times
        </h1>
        <p>click the button to increase the count!</p>
        <button className="b1" onClick={this.onIncrement}>
          Click Me !
        </button>
      </div>
    )
  }
}

export default ClickCounter
