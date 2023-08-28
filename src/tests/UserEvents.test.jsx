import UserEvents from '../UserEvents'
import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('UserEvents component', () => {
	it('Renders Modified text', () => {
		const { container } = render(<UserEvents />)
		expect(container).toMatchSnapshot()
	})
	it('Renders Modified text after a button click', async () => {
		const user = userEvent.setup()
		render(<UserEvents />)
		const button = screen.getByRole('button', { name: 'Set Text' })
		await user.click(button)
		expect(screen.getByRole('heading').textContent).toMatch(/Modified Text/i)
	})
})
