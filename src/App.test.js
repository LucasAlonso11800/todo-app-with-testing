import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('App', () => {
    test('Adds item to the list, marks it as complete and then removes it', () => {
        const { getByText, getByLabelText } = render(<App />);

        const input = getByLabelText('What needs to be done?');
        const button = getByText('Add #1');
        expect(button).toBeDisabled();

        userEvent.type(input, 'First todo');
        expect(button).toBeEnabled();
        userEvent.click(button);

        getByText('First todo');
        getByText('Add #2');

        const markAsCompleteButton = getByText('X');
        userEvent.click(markAsCompleteButton);
        getByText('O');

        const removeButton = getByText('Remove');
        userEvent.click(removeButton);
        getByText('Add #1');
    });
});