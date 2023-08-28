import { useState } from 'react'
function UserEvents() {
	const [text, setText] = useState('Initial Text')
	const handleText = () => {
		setText('Modified text')
	}
	return (
		<div>
			<h1>{text}</h1>
			<button onClick={handleText}>Set Text</button>
		</div>
	)
}

export default UserEvents
