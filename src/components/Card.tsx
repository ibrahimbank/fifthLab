import {Box, Card, CardContent, Stack, Theme, Typography, styled} from '@mui/material';
import Image from "next/image";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import React from "react";
import {User} from "@/Types";

const TypographyStyle = styled(Typography)(
    ({theme}) => `
   display:flex;
   opacity: 0.6;
   align-items: center;
   gap: .5;
   color: rgb(38, 42, 65);
   text-align: center;
   font-size: 12px;
`
);

interface CardComponentProps {
    user: User,
    setShowCountry: React.Dispatch<React.SetStateAction<boolean>>,
    setSelect: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedUser: React.Dispatch<React.SetStateAction<User>>,
    showCountry: boolean,
}

const CardComponent: React.FC<CardComponentProps> = ({setSelect,setSelectedUser,user, showCountry, setShowCountry, }) => (
    <Card sx={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px !important"}} >
        <CardContent sx={{display: {xs:"column", sm:'flex'}, justifyContent:{xs:"center", sm:"flex-end"}, gap: 2}}>
            <Box width={100} height={100} >
                <Image width={100} height={100} style={{borderRadius: "100%", border: "6px solid rgb(117, 214, 209)"}}
                       src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}/>
            </Box>
            <Stack width={"100%"} spacing={2} justifyContent={{xs: "center", sm: "flex-end"}}>
                <Stack>
                    <Typography variant="h4" fontWeight={700}
                                fontSize={20}>{user.name.first} {user.name.last}</Typography>
                    <Typography variant="subtitle2" fontWeight={400}
                                fontSize={15}><i>{user.location?.street?.number}, {user.location?.street?.name} {showCountry && user.location.country}</i></Typography>

                </Stack>

                <Stack width={"100%"} direction={{xs:"column", sm:"row"}} justifyContent="space-between" alignItems="center"
                       gap={"20px"}>
                    <Stack width={"100%"} direction={{xs:"column", sm:"row"}} spacing={2}>
                        <TypographyStyle variant="subtitle2" fontWeight={200} fontSize={12}>
                            <MailOutlineOutlinedIcon sx={{fontSize: "18px", color: 'rgb(186, 189, 209)'}}
                            /> {user.email}</TypographyStyle>
                        <TypographyStyle variant="subtitle2" fontWeight={200}
                                         fontSize={12}><PhoneInTalkOutlinedIcon
                            sx={{fontSize: "18px", color: 'rgb(186, 189, 209)'}}
                        />{user.phone}</TypographyStyle>

                    </Stack>
                    <Box onClick={()=>{
                        setSelect(true)
                        setSelectedUser(user)
                    }} sx={{
                        background: "rgb(117, 214, 209)",
                        padding: "15px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: "rgb(117, 214, 209)",
                        borderRadius: "10px",
                        cursor: "pointer",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px !important"
                    }}>
                        <EastOutlinedIcon sx={{
                            color: '#fff',
                            fontSize: "20px"
                        }}/>
                    </Box>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
);

export default CardComponent;
