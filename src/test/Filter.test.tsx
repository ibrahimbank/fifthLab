import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from "@/components/Filter";


test('GenderFilter calls onFilter with selected gender', () => {
    const onFilter = jest.fn();
    render(<Filter  onFilter={onFilter} />);


    userEvent.click(screen.getByLabelText(/Male/i));
    expect(onFilter).toHaveBeenCalledWith('male');


    userEvent.click(screen.getByLabelText(/Female/i));
    expect(onFilter).toHaveBeenCalledWith('female');


    userEvent.click(screen.getByLabelText(/All/i));
    expect(onFilter).toHaveBeenCalledWith('all');
});
