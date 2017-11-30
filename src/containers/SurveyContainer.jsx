import { bindActionCreators } from "redux";
import { h, Component } from "preact";
import { connect } from "preact-redux";

import * as surveyActions from "../actions/survey";
import Survey from "../components/Survey.jsx";

class SurveyContainer extends Component {
  keyDownHandler = e => {
    // ctrl+y
    if (e.keyCode == 89 && e.ctrlKey) {
      e.preventDefault();
      this.props.redo();
    }

    // ctrl+z
    if (e.keyCode == 90 && e.ctrlKey) {
      e.preventDefault();
      this.props.undo();
    }
  };

  render() {
    const settings = this.props.settings;
    const survey = this.props.survey;
    const { doComplete } = this.props.surveyActions;

    return (
      <div
        tabindex="0"
        class="sjs-survey-container"
        onKeyDown={this.keyDownHandler}
      >
        <button onClick={this.props.undo}>Undo</button>
        <button onClick={this.props.redo}>Redo</button>
        <Survey
          settings={settings}
          surveyState={survey}
          doComplete={doComplete}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings.present,
    survey: state.survey.present
  };
}

function mapDispatchToProps(dispatch) {
  return {
    surveyActions: bindActionCreators(surveyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
