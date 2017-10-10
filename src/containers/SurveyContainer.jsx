import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as counterActions from "../actions/counter"
import Survey from "../components/Survey.jsx"

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

class SurveyContainer extends Component {
  render() {
    const json = this.props.json;
    const counter = this.props.counterReducer
    const { increment, decrement } = this.props.counterActions

    //return <Survey value={counter} onIncrement={increment} onDecrement={decrement} />    
    return <Survey json={json} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)