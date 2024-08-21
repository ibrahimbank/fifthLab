export interface User {
    name: { first: string, last: string },
    email: string,
    picture: { large: string },
    location: {
        city: string,
        coordinates: { latitude: string, longitude: string },
        country: string,
        postcode: string,
        state: string,
        street: {
            name: string,
            number: number,
        }
    },
    phone: string,
    login: { uuid: string };
    registered: {
        age: string;
        date: string;
    },
    gender: string
    dob: {
        age: string;
        date: string;
    }

}