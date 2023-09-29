import './App.css'
import { useState } from 'react'

function App() {
	const [text, setText] = useState('Before')
	return (
		<div>
			<h1>Hello Vitest</h1>
			<p>{text}</p>
			<input
				type='text'
				placeholder='name'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	)
}

export default App
