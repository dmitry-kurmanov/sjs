import { h, render, Component } from 'preact';
import Element from './Element.jsx';

export default class Survey extends Component {
	render() {
        const elementsTemplate = this.props.settings.elements.map( (element) => <Element settings={element} changeResult={this.props.changeResult} /> );

        if (this.props.surveyState.isComplete) {
            return <h1>Thank you for completing the survey!</h1>
        }

		return <div class="sjs-survey">
            {elementsTemplate}
            <button onClick={this.props.doComplete}>complete</button>
        </div>;
	}
}