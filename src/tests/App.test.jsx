import App from '../App'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('App component', () => {
	it('Renders App component', () => {
		render(<App />)
		// This is an explicit assertion
		expect(screen.getByRole('heading').textContent).toBe('Hello Vitest')
		// This is an implicit assertion
		screen.getByText('Hello Vitest')
		screen.getByText(/Hello/)
		// use queryBy when asserting for a missing element
		expect(screen.queryByText(/Javascript/)).toBeNull()
	})
	it('Shows header with text Hello Vitest', () => {
		render(<App />)
		expect(screen.getByRole('heading').textContent).toMatch(/Hello Vitest/i)
	})

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
	it('Contains an input field', () => {
		render(<App />)
		expect(screen.getByRole('textbox')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
	})
	it('Changes input value with fireEvent', () => {
		render(<App />)
		const input = screen.getByRole('textbox')
		expect(input.value).toBe('Before')
		fireEvent.change(input, { target: { value: 'Javascript' } })
		expect(input.value).toBe('Javascript')
		waitFor(() => expect(screen.getByText('Javascript')).toBeInTheDocument())
	})
	it('Changes input value with userEvent', async () => {
		render(<App />)
		screen.debug()
		const input = screen.getByRole('textbox')
		expect(input.value).toBe('Before')
		fireEvent.change(input, { target: { value: '' } })
		await userEvent.type(input, 'After')
		expect(input.value).toBe('After')
		waitFor(() => expect(screen.getByText('After')).toBeInTheDocument())
		screen.debug()
	})
})
