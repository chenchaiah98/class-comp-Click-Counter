// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">
          The button has been clicked <span className="">{count}</span> times
        </h1>

        <p className="count">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.increment}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
