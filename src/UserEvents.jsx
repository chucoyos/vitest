import useState from 'react'
function App() {
	const [text, setText] = useState('Initial Text')
	const handleText = () => {
		setText('Modified test')
	}
	return (
		<>
			<p>{text}</p>
			<button onClick={handleText}>Set Text</button>
		</>
	)
}

export default App
