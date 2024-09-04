import React from 'react';
import {Box, Stack, styled, Typography} from "@mui/material";
import Image from "next/image";
import {User} from "@/Types";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TypographyStyle = styled(Typography)(
    ({theme}) => `
   display:flex;
   opacity: 0.6;
   align-items: center;
   justify-content: center;
   gap: .5;
   color: rgb(38, 42, 65);
   text-align: center;
   font-size: 12px;
   background: rgb(247, 217, 242);
   border-radius: 30px;
   padding: .5rem;
  
`
);

const TypographyEmailStyle = styled(Typography)(
    ({theme}) => `
   display:flex;
   opacity: 0.6;
   align-items: center;
   justify-content: center;
   gap: .5rem;
   color: rgb(38, 42, 65);
   text-align: center;
   font-size: 12px;
   background: rgba(0, 0, 0, .12);
   border-radius: 30px;
   padding: .5rem;

`
);

//  background: "rgba(0, 0, 0, .12)",

function UserCard({user,setSelect}: {user: User,  setSelect: React.Dispatch<React.SetStateAction<boolean>>;}) {
    return (
     <Stack  spacing={2} mb={4} width={"100%"}>
         <Typography sx={{cursor:"pointer", display: "flex", alignItems:"center"}} variant="h4" fontWeight={400}
                     fontSize={14} onClick={()=>{
             setSelect(false)
         }} ><ArrowBackIcon sx={{color:"rgb(117, 214, 209)"}}/> RESULTS</Typography>
     <Stack direction={{xs:"column", lg:"row"}} spacing={2} width={"100%"}>
         <Box width={200} height={200} >
             <Image width={200} height={200} style={{borderRadius: "100%", border: "6px solid rgb(117, 214, 209)"}}
                    src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}/>
         </Box>
         <Stack spacing={2}  width={"100%"}>
         <Stack width={"100%"} spacing={2}>
             <Typography variant="h4" fontWeight={700}
                         fontSize={20} sx={{
                 display: "flex", alignItems:"center",
                 padding: "0px 0px"
             }} >{user.gender === "male" ? "Mr" : "Mrs"} {user.name.first} {user.name.last} <span>{user.dob.age}</span></Typography>
             <Typography variant="subtitle2" fontWeight={400}
                         fontSize={15}><i>{user.location?.street?.number}, {user.location?.street?.name} {user.location.country}</i></Typography>

             <TypographyEmailStyle sx={{width: {xs: "100%", lg:"60%"}}} variant="subtitle2" fontWeight={600} fontSize={12}>
                 <MailOutlineOutlinedIcon sx={{fontSize: "18px", color: 'rgba(0, 0, 0, .26)'}}
                 /> {user.email}</TypographyEmailStyle>

             <TypographyStyle sx={{width: {xs: "100%", lg:"60%"}}} variant="subtitle2" fontWeight={600} fontSize={12}>

              JOINED: {(user.registered.date)}</TypographyStyle>
         </Stack>

         <Stack width={"100%"} direction={{xs:"column", sm:"row"}} justifyContent="space-between" alignItems="center"
                gap={"20px"}>


                 <Typography variant="subtitle2" sx={{display: "flex", alignItems: "center"}} fontWeight={200}
                                  fontSize={12}><PhoneInTalkOutlinedIcon
                     sx={{fontSize: "18px", color: 'rgb(186, 189, 209)'}}
                 />{user.phone}</Typography>
     </Stack>

     </Stack>
     </Stack>
     </Stack>
    );
}

export default UserCard;