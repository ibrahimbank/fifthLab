import { render } from '@testing-library/react';
import {  screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Pagination from "@/components/Pagination";

test('Pagination calls onPageChange with the selected page number', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);


    userEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);


    userEvent.click(screen.getByText('5'));
    expect(onPageChange).toHaveBeenCalledWith(5);
});
