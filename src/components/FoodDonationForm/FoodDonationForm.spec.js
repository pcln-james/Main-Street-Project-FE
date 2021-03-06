import React from 'react';
import { render } from '@testing-library/react';
import FoodDonationForm from './FoodDonationForm';
import { mockFoodDonationProps } from 'tests/mocks/MockDonationFormProps';

describe ('FoodDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<FoodDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText, getByTestId } = render(<FoodDonationForm />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const quantity = await getByPlaceholderText('Quantity');
        const retailValue = await getByPlaceholderText('Retail Value ($)');
        const condition = await getByTestId('Condition');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('');
        expect(description.value).toBe('');
        expect(quantity.value).toBe('');
        expect(retailValue.value).toBe('');
        expect(condition.value).toBe('Perfect');
        expect(notes.value).toBe('');
    });

    it ('has all fields used', async () => {
        const { getByLabelText, getByPlaceholderText, getByTestId } = render(<FoodDonationForm {...mockFoodDonationProps} />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const quantity = await getByPlaceholderText('Quantity');
        const retailValue = await getByPlaceholderText('Retail Value ($)');
        const condition = await getByTestId('Condition');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Strawberries');
        expect(description.value).toBe('Palette of Juicy Fruit');
        expect(quantity.value).toBe('5');
        expect(retailValue.value).toBe('100');
        expect(condition.value).toBe('Great');
        expect(notes.value).toBe('A bunch of notes');
    });
});
