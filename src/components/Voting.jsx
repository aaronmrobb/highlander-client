import React, { Component } from 'react'
import Vote from './Vote.jsx'
import Winner from './Winner.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

export class Voting extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div> {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
      </div>
    )
  }
}

reactMixin(Voting.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}


export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting)
