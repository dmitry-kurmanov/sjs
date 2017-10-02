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
        const incrementIfOdd = this.incrementIfOdd.bind(this)
        const incrementAsync = this.incrementAsync.bind(this)

		return <div>
            <p>
                Clicked: <span>{value}</span> times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={incrementIfOdd}>Increment if odd</button>
                <button onClick={incrementAsync}>Increment async</button>
            </p>
        </div>;
	}
}