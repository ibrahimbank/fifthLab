import {
    Stack,
    Typography,
    Card,
    Grid
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import GirlOutlinedIcon from '@mui/icons-material/GirlOutlined';
import BoyIcon from '@mui/icons-material/Boy';
import React from "react";

interface FilterProps {
    onFilter: (gender: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => (
    <Stack >
        <Typography fontSize={"14px"}  sx={{color: "#fff"}} mb={2}>Show Users</Typography>
            <Grid container spacing={2}>
                {React.Children.toArray(
                    filterOptions.map(({name, value,icon, background}) => (
                        <Grid item xs={12} sm={4} onClick={() => onFilter(value)}>
                            <Card sx={{display: 'flex', cursor: "pointer", padding: "1.5rem", borderRadius: "20px", justifyContent: 'center', alignItems: 'center', background: background}}>
                                {icon}
                            </Card>
                            <Typography textAlign={"center"} fontSize={"12px"} mt={"14px"} fontWeight={"100"}  sx={{color: "#fff"}}>{name}</Typography>
                        </Grid>
                    ))
                )}
            </Grid>
    </Stack>
);

const filterOptions= [
    {
      name:   "All users",
        value: "all",

        icon:   <GroupsIcon  sx={{color: "#fff", fontSize: "45px"}}/>,
        background: "rgb(249, 53, 169)",
    },

    {
      name:   "Male users",
        value: "male",
        icon:     <BoyIcon  sx={{color: "#fff", fontSize: "45px"}}/>,
        background: "rgb(48, 187, 181)"

    },

    {
      name:   "Female users",
        value: "female",
        icon:    <GirlOutlinedIcon fontSize={"large"} sx={{color: "#fff",fontSize: "45px"}}/>,
        background: "rgb(121, 70, 193)"

    },




]

export default Filter;
