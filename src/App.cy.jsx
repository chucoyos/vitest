/* eslint-disable no-undef */
import App from './App'

describe('<App />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<App />)
	})
	it('shows header', () => {
		cy.mount(<App />)
		cy.contains('Hello Vitest')
	})
	it('type in input', () => {
		cy.mount(<App />)
		cy.get('input').clear()
		cy.get('input').type('Hello Vitest')
		cy.contains('Hello Vitest')
	})
})
