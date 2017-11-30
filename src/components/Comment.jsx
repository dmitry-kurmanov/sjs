import { h, render, Component } from "preact";

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.onChange({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>{this.props.settings.title}</h3>
        <textarea
          name={this.props.settings.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
