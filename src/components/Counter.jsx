import { h, render, Component } from 'preact';

export default class Counter extends Component {
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
        this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

	render() {
        const { value, onIncrement, onDecrement } = this.props
		return <div>
            <p>
                Clicked: <span>{value}</span> times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd.bind(this)}>Increment if odd</button>
                <button onClick={this.incrementAsync.bind(this)}>Increment async</button>
            </p>
        </div>;
	}
}