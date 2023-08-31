import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import UserEvents from '../UserEvents'
import { it, describe, expect } from 'vitest'

describe('UserEvents component', () => {
	it('Renders Modified text', () => {
		const { container } = render(<UserEvents />)
		const button = screen.getByRole('button', { name: 'Set Text' })
		expect(container).toMatchSnapshot()
		expect(container.firstChild).not.toHaveClass('user-events')
		expect(screen.getByRole('heading').classList.contains('heading')).toBe(true)
		expect(screen.getByRole('heading').classList.contains('cool')).toBe(true)
		expect(screen.getByRole('paragraph').classList.contains('heading')).toBe(
			false
		)
		expect(button).toBeInTheDocument()
		expect(button).toBeVisible()
		expect(button).toBeEnabled()
		expect(button).toHaveTextContent('Set Text')
		expect(button).toHaveAttribute('type', 'button')
	})
	it('Renders Modified text after a button click', async () => {
		const user = userEvent.setup()
		render(<UserEvents />)
		const button = screen.getByRole('button', { name: 'Set Text' })
		await user.click(button)
		expect(screen.getByRole('heading').textContent).toMatch(/Modified Text/i)
		expect(screen.getByRole('paragraph').textContent).toMatch(/Modified Text/i)
	})
})
