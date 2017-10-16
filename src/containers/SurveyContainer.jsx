import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as counterActions from "../actions/counter"
import * as resultActions from "../actions/result"
import Survey from "../components/Survey.jsx"

function mapStateToProps(state) {
  return {
    counter: state.counter,
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
    resultActions: bindActionCreators(resultActions, dispatch),
  }
}

class SurveyContainer extends Component {
  render() {
    const settings = this.props.settings;
    const counter = this.props.counter;
    const { increment, decrement } = this.props.counterActions
    const { userInput } = this.props.resultActions

    //return <Survey value={counter} onIncrement={increment} onDecrement={decrement} />    
    return <Survey settings={settings} userInput={userInput} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)