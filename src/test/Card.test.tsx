import { render, screen } from '@testing-library/react';
import CardComponent from "@/components/Card";

const user = {
    name: { first: 'Tola', last: 'Kolawole' },
    email: 'tolakolawole@gmail.com',
    picture: { large: 'https://via.placeholder.com/150' },
};

test('Card displays user information correctly', () => {
    render(<CardComponent user={user} />);


    expect(screen.getByText('Tola Kolawole')).toBeInTheDocument();


    expect(screen.getByText('tolakolawole@gmail.com')).toBeInTheDocument();


    expect(screen.getByAltText('Tola Kolawole')).toHaveAttribute('src', user.picture.large);
});
