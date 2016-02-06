import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List, Map } from 'immutable'

const pair = List.of('Trainspotting', '28 Days Later')
const tally = Map({'Trainspotting': 5, '28 Days Later': 4})

class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
        React.cloneElement(this.props.children, {
          pair: pair,
          tally: tally
        })
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)

export default App
