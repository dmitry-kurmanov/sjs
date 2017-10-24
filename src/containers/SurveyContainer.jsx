import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as surveyActions from "../actions/survey"
import * as resultActions from "../actions/result"
import Survey from "../components/Survey.jsx"

function mapStateToProps(state) {
  return {
    settings: state.settings,
    survey: state.survey
  }
}

function mapDispatchToProps(dispatch) {
  return {
    surveyActions: bindActionCreators(surveyActions, dispatch),
    resultActions: bindActionCreators(resultActions, dispatch),
  }
}

class SurveyContainer extends Component {
  render() {
    const settings = this.props.settings;
    const survey = this.props.survey;
    const { doComplete } = this.props.surveyActions
    const { changeResult } = this.props.resultActions

    //return <Survey value={counter} onIncrement={increment} onDecrement={decrement} />    
    return <Survey settings={settings} surveyState={survey} doComplete={doComplete} changeResult={changeResult} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)