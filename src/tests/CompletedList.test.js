import { render } from '@testing-library/react'
import CompletedList from "../CompletedList";

//TODO: figure out how to implement testing for dynamic components like this list
describe('CompletedList', () => {
    it('should render a message when empty', () => {
        const { getByText } = render(<CompletedList />)
        const specificTest = getByText("You're all caught up!")
        expect(specificTest).toBeInTheDocument()
    })
})