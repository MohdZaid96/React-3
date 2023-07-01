import { useState } from 'react'

const Count = () => {
	const [count, setCount] = useState(0)
	const incrementCount = () => {
		setCount(count + 1)
	}
	const incrementCount5 = () => {
		setCount((count) => count + 1) // 1
		setCount((count) => count + 1) // 2
		setCount((count) => count + 1) // 3
		setCount((count) => count + 1) // 4
		setCount((count) => count + 1) // 5
	}
	return (
		<div>
			<p style={{ fontSize: '30px' }}>{count}</p>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={incrementCount5}>Increment 5</button>
		</div>
	)
}

export default Count


/*
	## State handlers (setCount) is asynchronous in nature
*/