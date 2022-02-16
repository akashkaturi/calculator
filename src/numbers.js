const Numbers = ({ updateCalculator, finalResult }) => {
	const numberArray = [];
	for (let i = 1; i <= 9; i++) {
		numberArray.push(
			<button key={i} onClick={() => updateCalculator(i.toString())}>
				{i}
			</button>
		);
	}
	return (
		<div>
			<div className='numbers'>
				{numberArray.map((numbers) => {
					return numbers;
				})}
			</div>
			<div className='bottom-row'>
			
				<button onClick={() => updateCalculator('0')}>0</button>
				<button onClick={() => updateCalculator('.')}>.</button>
				<button
					onClick={() => {
						finalResult();
					}}
				>
					=
				</button>
			</div>
		</div>
	);
};
export default Numbers;
