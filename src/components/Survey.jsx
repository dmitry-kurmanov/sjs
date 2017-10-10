import { h, render, Component } from 'preact';
import Element from './Element.jsx';

export default class Survey extends Component {
	render() {
        const { json } = this.props
        const elementsData = json.elements;

        const elements = elementsData.map((elData) => <Element type={elData.type} />)

		return <div class="sjs-survey">
            {elements}
        </div>;
	}
}