import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as counterActions from "../actions/counter"
import Survey from "../components/Survey.jsx"

function mapStateToProps(state) {
  return {
    counter: state.counter,
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

class SurveyContainer extends Component {
  render() {
    const settings = this.props.settings;
    const counter = this.props.counter;
    const { increment, decrement } = this.props.counterActions

    //return <Survey value={counter} onIncrement={increment} onDecrement={decrement} />    
    return <Survey settings={settings} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)