import App from '../App'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('App component', () => {
	it('Shows header with text Hello Vitest', () => {})
	render(<App />)
	expect(screen.getByRole('heading').textContent).toMatch(/Hello Vitest/i)

	it('Shows examples to get header with text Hello Vitest', () => {
		render(<App />)
		expect(screen.getByRole('heading').textContent).toBe('Hello Vitest')
		expect(screen.getByRole('heading').textContent).toEqual('Hello Vitest')
		expect(screen.getByRole('heading').textContent).not.toEqual(
			'Hello Vitest 2'
		)
		expect(screen.getByRole('heading').textContent).not.toBe('Hello Vitest 2')
	})

	it('Shows examples with snapshot', () => {
		const { container } = render(<App />)
		expect(container).toMatchSnapshot()
		expect(screen.getByRole('heading').textContent).toMatchSnapshot()
		expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot(
			`"Hello Vitest"`
		)
	})
})
