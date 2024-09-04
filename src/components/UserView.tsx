import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    Select,
    Stack, styled, Switch, TextField,
    Typography
} from "@mui/material";
import SearchBar from "@/components/SearchBar";
import CardComponent from "@/components/Card";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Pagination from "@/components/Pagination";
import {User} from "@/Types";
// @ts-ignore
import {Fade} from 'react-reveal'

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    marginRight: '.2rem',
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#bfe4e7',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
                background: 'rgb(48, 187, 181)',
                border: 0,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
            background: 'rgb(48, 187, 181)'
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: 'rgb(48, 187, 181)',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity:  0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        background: 'white',
        border: 0,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor:  '#E9E9EA' ,
        opacity: 1,

    },
}));


interface UserViewProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setSelectedUser: React.Dispatch<React.SetStateAction<User>>;
    setShowCountry: React.Dispatch<React.SetStateAction<boolean>>;
    setSelect: React.Dispatch<React.SetStateAction<boolean>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    country: string;
    showCountry: boolean;
    countries: string[];
    filteredUsers: User[];
    handleDownload: any;
    setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
    users: User[];
    totalPages: number;
    page: number;
}

function UserView({setFilteredUsers,users, setSelect,setSelectedUser,setSearchQuery, country, setCountry, countries, filteredUsers,handleDownload,showCountry,setShowCountry,totalPages, setPage,page}: UserViewProps) {
    return (
        <Box sx={{
            width: "100%",
            borderRadius: "17px",
            paddingTop: "3rem",
            background: "rgb(247, 247, 255)",
            marginTop: {xs:"120px", md: "0px"}
        }}>

            <Stack sx={{padding: "2rem"}}>

                <Typography color={'rgb(48, 52, 74)'} fontSize={22} fontWeight={700} variant="h4">All
                    Users
                </Typography>
                <Typography color={'rgb(48, 52, 74)'} mb={4} fontSize={12} fontWeight={300}
                            variant="subtitle1">Filter by</Typography>

                <Grid container spacing={3}>

                    <Stack direction={{xs:"column", sm:"row"}} alignItems={"center"} justifyContent={'space-between'}
                           gap={2} width={"100%"} p={2}>


                        <SearchBar onSearch={setSearchQuery} placeholder="Find in list"
                                   borderRadius={"30px"} background={'rgba(0, 0, 0, .06)'}
                                   boxShadow={'none'} padding={"10px 24px"}/>

                        <FormControl fullWidth variant="outlined" style={{margin: '20px 0'}}>

                            <TextField
                                select
                                value={country}
                                SelectProps={{
                                    native: true,
                                }}
                                onChange={(e) => {
                                    setCountry(e.target.value as string)
                                    const filtered = users.filter(user =>
                                        user?.location?.country.toLowerCase() === e.target.value.toLowerCase()  as string
                                    );
                                    setFilteredUsers(filtered);
                                }}
                                placeholder={'Country'}
                                variant={"outlined"}
                                sx={{
                                    borderRadius: "30px",
                                    background: 'rgba(0, 0, 0, .06)',
                                    boxShadow: "none",
                                    border: 'none', "& fieldset": { border: 'none !important' },
                                    ".MuiOutlinedInput-notchedOutline": {border: 0},
                                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                            border: 0,
                                        },
                                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            border: 0,
                                        },
                                }}

                            >
                                <option value="Country">Country</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </TextField>
                        </FormControl>

                        <FormGroup>
                            <FormControlLabel name={"showCountry"} value={showCountry} onChange={(e, checked)=>{
                                setShowCountry(checked)
                            }} control={<IOSSwitch />} defaultChecked={true} label="Show Country"/>
                        </FormGroup>
                    </Stack>
                    {filteredUsers.map(user => (
                        <Grid item xs={12} sm={12} md={12} key={user.login.uuid}>
                            <Fade >
                                <CardComponent setSelectedUser={setSelectedUser} setSelect={setSelect} user={user} showCountry={showCountry} setShowCountry={setShowCountry}/>

                            </Fade>
                          </Grid>
                    ))}
                </Grid>

                <Stack direction={{xs:"column", sm:'row'}} justifyContent={"space-between"} alignItems={"center"}>
                    <Button startIcon={<CloudDownloadOutlinedIcon/>} onClick={handleDownload}
                            variant="contained" color="primary"
                            style={{margin: '20px 0', borderRadius: "30px"}}>
                        Download Users
                    </Button>
                    <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
                </Stack>
            </Stack>


        </Box>
    );
}

export default UserView;