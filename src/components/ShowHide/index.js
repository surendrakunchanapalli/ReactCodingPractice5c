import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, iaLastName: true}

  onFirstClick = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLastClick = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onFirstClick}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button type="button" className="button" onClick={this.onLastClick}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
