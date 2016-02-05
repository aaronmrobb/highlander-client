import React, { Component } from 'react'

class Winner extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}
      </div>
    )
  }
}

export default Winner
