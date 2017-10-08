import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as counterActions from "../actions/counter"
import Counter from "../components/Counter.jsx"

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

class App extends Component {
  render() {
    const counter = this.props.counter
    const { increment, decrement } = this.props.counterActions

    return <Counter value={counter} onIncrement={increment} onDecrement={decrement} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)