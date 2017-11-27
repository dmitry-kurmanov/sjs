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
    const title = this.props.settings.title;

    return (
      <div>
        <h3>{title}</h3>
        <textarea name={this.props.name} onChange={this.handleChange} />
      </div>
    );
  }
}
