import { h, render, Component } from "preact";
import ElementsContainer from "../containers/ElementsContainer.jsx";

export default class Survey extends Component {
  render() {
    if (this.props.surveyState.isComplete) {
      return <h1>Thank you for completing the survey!</h1>;
    }

    return (
      <div class="sjs-survey">
        <ElementsContainer />
        <button onClick={this.props.doComplete}>complete</button>
      </div>
    );
  }
}
