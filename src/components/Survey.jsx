import { h, render, Component } from 'preact';
import Element from './Element.jsx';

export default class Survey extends Component {
	render() {
        const elementsTemplate = this.props.settings.elements.map( (element) => <Element settings={element} userInput={this.props.userInput} /> )

		return <div class="sjs-survey">
            {elementsTemplate}
        </div>;
	}
}