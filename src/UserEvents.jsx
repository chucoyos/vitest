import { useState } from 'react'
function UserEvents() {
	const [text, setText] = useState('Initial Text')
	const handleText = () => {
		setText('Modified text')
	}
	return (
		<div>
			<h1 className='heading cool'>{text}</h1>
			<p role='paragraph'>{text}</p>
			<button
				type='button'
				onClick={handleText}
			>
				Set Text
			</button>
		</div>
	)
}

export default UserEvents
