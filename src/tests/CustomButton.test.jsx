import CustomButton from '../CustomButton'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
describe('CustomButton component', () => {
	it('Should render a button with the text Click Me', () => {
		render(<CustomButton />)
		const button = screen.getByRole('button', { name: 'Click Me' })
		expect(button).toBeInTheDocument()
	})

	it('should call the onClick function when clicked', async () => {
		const onClick = vi.fn()
		const user = userEvent.setup()
		render(<CustomButton onClick={onClick} />)
		const button = screen.getByRole('button', { name: 'Click Me' })
		await user.click(button)
		expect(onClick).toHaveBeenCalled()
		expect(onClick).toHaveBeenCalledTimes(1)
	})

	it("should not call the onClick function when it isn't clicked", async () => {
		const onClick = vi.fn()
		render(<CustomButton onClick={onClick} />)

		expect(onClick).not.toHaveBeenCalled()
	})
})
