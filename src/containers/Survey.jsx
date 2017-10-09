import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as counterActions from "../actions/counter"
import Counter from "../components/Counter.jsx"

function mapStateToProps(state) {
  return {
    counterReducer: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

class Survey extends Component {
  render() {
    console.dir(this.props.json);
    const counter = this.props.counterReducer
    const { increment, decrement } = this.props.counterActions

    return <Counter value={counter} onIncrement={increment} onDecrement={decrement} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)