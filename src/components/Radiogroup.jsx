import { h, render, Component } from "preact";
import nanoid from "nanoid";

export default class Radiogroup extends Component {
  handleChange = e => {
    this.props.onChange({
      [e.target.name]: e.target.value
    });
  };

  generateChoicesTemplate() {
    const name = this.props.settings.name;
    let choicesTemplate = this.props.settings.choices.map((choice, index) => {
      const id = `${name}_${choice}`;

      return (
        <div key={nanoid()}>
          <label for={id}>{choice}</label>
          <input
            type="radio"
            name={name}
            id={id}
            value={choice}
            onChange={this.handleChange}
          />
        </div>
      );
    });

    return choicesTemplate;
  }

  render() {
    const title = this.props.settings.title;
    const choicesTemplate = this.generateChoicesTemplate();

    return (
      <div>
        <h3>{title}</h3>
        {choicesTemplate}
      </div>
    );
  }
}
