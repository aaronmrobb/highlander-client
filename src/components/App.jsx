import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List, Map } from 'immutable'



class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
    this.props.children
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)

export default App
