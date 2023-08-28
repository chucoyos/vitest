import App from '../App'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('App component', () => {
	it('Shows header with text Hello Vitest', () => {})
	render(<App />)
	expect(screen.getByRole('heading').textContent).toMatch(/Hello Vitest/i)
})
