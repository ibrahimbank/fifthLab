import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import SearchBar from "@/components/SearchBar";

test('SearchBar calls onSearch with the input value', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    userEvent.type(screen.getByRole('textbox'), 'Tola');
    expect(onSearch).toHaveBeenCalledWith('Tola');
});
