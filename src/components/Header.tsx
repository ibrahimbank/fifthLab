import React from 'react';
import {Stack, Typography} from "@mui/material";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";

interface User {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setGender: React.Dispatch<React.SetStateAction<string>>;
}

function Header({setSearchQuery, setGender}: User) {
    return (
        <Stack spacing={4} width={{xs:"100%", md:"70%"}} p={"8rem 0rem 0rem 1rem"}>
            <Stack spacing={2}>
                <Typography variant="h4" color={'white'} fontSize={"30px"} fontWeight={100}>Hello, <span
                    style={{fontWeight: 900, fontSize: "30px"}}>Emerald</span></Typography>
                <Typography color={'white'} fontWeight={100} variant="subtitle1">Welcome to your
                    dashboard, kindly sort through the user
                    base</Typography>
                <SearchBar onSearch={setSearchQuery} placeholder={'Find a user'}/>

            </Stack>

            <Filter onFilter={setGender}/>
        </Stack>
    );
}

export default Header;