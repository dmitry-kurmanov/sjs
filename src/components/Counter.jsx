import { h, render, Component } from 'preact';

// <!-- <div>
//         <p>
//             Clicked: <span id="value">0</span> times
//             <button id="increment">+</button>
//             <button id="decrement">-</button>
//             <button id="incrementIfOdd">Increment if odd</button>
//             <button id="incrementAsync">Increment async</button>
//         </p>
//     </div> -->

export default class Counter extends Component {
	render() {
		return <div>
            <p>
                hello counter and preact
            </p>
        </div>;
	}
}