import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material";
import Header from "@/components/Header";
import UserView from "@/components/UserView";
import SingleUserView from "@/components/SingleUserView";
import {User} from "@/Types";
import {getAllUsers} from "@/services/helper";

function HomePage() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User>({
        dob: {age: "", date: ""},
        email: "",
        gender: "",
        location: {
            city: "",
            coordinates: {latitude: "", longitude: ""},
            country: "",
            postcode: "",
            state: "",
            street: {name: "", number: 0}
        },
        login: {uuid: ""},
        name: {first: "", last: ""},
        phone: "",
        picture: {large: ""},
        registered: {age: "", date: ""}
    });
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [gender, setGender] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [country, setCountry] = useState('all');
    const [showCountry, setShowCountry] = useState<boolean>(true)
    const [select, setSelect] = useState<boolean>(false)
    const [countries, setCountries] = useState<string[]>([]);  // State to store unique countries


    const usersPerPage = 3;

    useEffect(() => {
        getAllUsers(page, usersPerPage, gender === 'all' ? undefined : gender).then(data => {
            setUsers(data.results);
            setFilteredUsers(data.results);
            setTotalPages(Math.ceil(data.info.results / usersPerPage));

            const uniqueCountries = Array.from(new Set(data.results.map((user: {
                location: { country: any; };
            }) => user.location.country)));
            // @ts-ignore
            setCountries(uniqueCountries);
        });
    }, [page, gender]);

    useEffect(() => {
        const filtered = users.filter(user =>
            `${user?.name?.first} ${user?.name?.last}`.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchQuery, users]);

    const handleFilterCountry = () => {
        const filtered = users.filter(user =>
            user?.location?.country.toLowerCase() === country.toLowerCase()
        );
        setFilteredUsers(filtered);
    }

    const handleDownload = () => {
        const csv = filteredUsers.map(user => `${user?.name?.first},${user?.name?.last},${user?.email}`).join('\n');
        const blob = new Blob([csv], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'users.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <Container sx={{
            display: {xs: "column", md: "flex"},
            gap: '80px',
            maxWidth: "1400px !important",
            paddingTop: "2rem"
        }}>
            <Header setGender={setGender} setSearchQuery={setSearchQuery} />
            { !select ? <UserView users={users} setFilteredUsers={setFilteredUsers} setSearchQuery={setSearchQuery} country={country} showCountry={showCountry}
                                  countries={countries} filteredUsers={filteredUsers} handleDownload={handleDownload}
                                  setCountry={setCountry} page={page} totalPages={totalPages}
                                  setShowCountry={setShowCountry} setPage={setPage} setSelectedUser={setSelectedUser} setSelect={setSelect}/>

                :

                <SingleUserView selectedUser={selectedUser} setSearchQuery={setSearchQuery} country={country} showCountry={showCountry}
                                countries={countries} filteredUsers={filteredUsers} handleDownload={handleDownload}
                                setCountry={setCountry} page={page} totalPages={totalPages}
                                setShowCountry={setShowCountry} setPage={setPage}  setSelect={setSelect}/>
            }     </Container>
    );
}

export default HomePage;