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
    return <textarea name={this.props.name} onChange={this.handleChange} />;
  }
}
