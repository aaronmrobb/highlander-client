import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner'

class Results extends Component {
  constructor(props) {
    super(props)
  }
  getPair() {
    return this.props.pair || []
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry)
    }
    return 0
  }
  render() {
    return(
      this.props.winner ?
      <Winner ref="winner" winner={this.props.winner}/> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
          <div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
        </div>
        )}
        </div>
        <div className="management">
          <button ref="next" className="next" onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>

    )
  }
}


reactMixin(Results.prototype, PureRenderMixin)

export default Results