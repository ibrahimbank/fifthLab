import axios from 'axios';

export const getAllUsers = async (page: number = 1, results: number = 10, gender?: string) => {
    const genderQuery = gender ? `&gender=${gender}` : '';
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=${results}${genderQuery}`);
    return response.data;
};
