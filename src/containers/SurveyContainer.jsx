import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as surveyActions from "../actions/survey"
import Survey from "../components/Survey.jsx"

class SurveyContainer extends Component {
  render() {
    const settings = this.props.settings;
    const survey = this.props.survey;
    const { doComplete } = this.props.surveyActions
    
    return <Survey settings={settings} surveyState={survey} doComplete={doComplete} />
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    survey: state.survey
  }
}

function mapDispatchToProps(dispatch) {
  return {
    surveyActions: bindActionCreators(surveyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)