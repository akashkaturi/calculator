import './App.css';
import Numbers from './numbers';
import { useState, useEffect } from 'react';
function App() {
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState('');
	const operators = ['/', '*', '+', '-', '.'];
	const updateCalculator = (value) => {
		if (
			(operators.includes(value) && calc === '') ||
			(operators.includes(value) && operators.includes(calc.slice(-1)))
		) {
			return;
		}
		setCalc(calc + value);
	
		if (!operators.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	};
	const deleteLast = () => {
		if (calc === ' ') {
			return;
		}
		const value = calc.slice(0, -1);
		setCalc(value);
		if (operators.includes(value.slice(-1))) {
			setResult(eval(value.toString().slice(0, -1)));
		} else {
			setResult(eval(value.toString()));
		}
	};
	const finalResult = () => {
		setCalc(result);
		setResult('');
	};
	const clearAll = () => {
		setCalc('');
		setResult('');
	};
	const getLocalvalues = () => {
		if (localStorage.getItem('calc') === null) {
			localStorage.setItem('calc', '');
		}
		if (localStorage.getItem('result') === null) {
			localStorage.setItem('result', (''));
		}
		const cal = localStorage.getItem('calc');
		const res = localStorage.getItem('result');
		setCalc(cal);
		setResult(res);
	};
	useEffect(() => {
		getLocalvalues();
	}, []);
	useEffect(() => {
		localStorage.setItem('calc', (calc));
		localStorage.setItem('result', (result));
	}, [result, calc]);

	return (
		<div className='App'>
			<h1>Simple Calculator React App</h1>

			<div className='calculator'>
				<div className='display'>
					{result ? <span>({result}) </span> : ''} {calc || '0'}
				</div>
				<div className='operators'>
					<button onClick={() => clearAll()}>AC</button>
					<button onClick={() => updateCalculator('/')}>/</button>
					<button onClick={() => updateCalculator('*')}>*</button>
					<button onClick={() => updateCalculator('+')}>+</button>
					<button onClick={() => updateCalculator('-')}>-</button>
					<button
						onClick={() => {
							deleteLast();
						}}
					>
						Del
					</button>
				</div>
				<div className='digits'>
					<Numbers updateCalculator={updateCalculator} finalResult={finalResult} />
				</div>
			</div>
		</div>
	);
}

export default App;
