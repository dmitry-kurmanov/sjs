import { h, render, Component } from 'preact';
import nanoid from "nanoid";

export default class Radiogroup extends Component {
	constructor(props) {
		super(props);

		this.name = "radiogroup1";

		this.choices = [
			{
				value: 'female',
				label: 'Female'	
			},
			{
				value: 'male',
				label: 'Male'	
			}
		];

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.userInput({
			[e.target.name]: e.target.value
		});
	  }

	render() {
		const name = this.name;
		let choicesTemplate = this.choices.map( (choice, index) => {
				const id = `${name}_${choice.value}`;

				return <div key={nanoid()}>
					<label for={id}>{choice.label}</label>
					<input type="radio" name={name} id={id} value={choice.value} onChange={this.handleChange}/>
				</div>
			}
		)

		return <div>
            {choicesTemplate}
        </div>;
	}
}