import React from "react";
import { Box, Grid } from "@mui/material";
import { Text } from './Styles'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { TextUnderline } from "./Styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const history = useNavigate();

  const handleNavigation = (link) => {
    history(link);
    window.scrollTo(0, 0);
  };


  return (

      // <Grid container spacing={2}>
       <Box sx={{ backgroundColor: "#eadfe9"}} p={2}>
        <Grid container sx={{ display: "flex", alignItems:"center" }}>
          <Grid item xs={4} sx={{ display: { sm: "flex", xs: "none" }, justifyContent: "center"}}>
          <Box sx={{ pr: 3 }}>
          <img width="200px" height="100px" alt="bacp logo" src="../../../BacpLogo.png" />
          </Box>
          <img width="100px" height="100px" alt="bacp logo" src="../../../OTC.png" />
          </Grid>

          <Grid item xs={6} sx={{ display: { sm: "none", xs: "flex" }, justifyContent: "center"}}>
            <Box>
            <Box sx={{ pr: 3 }}>
          <img width="50px" alt="bacp logo" src="../../../BacpLogo.png" />
          </Box>
          <img width="50px" height="50px" alt="bacp logo" src="../../../OTC.png" />
            <Text sx={{ fontSize: "8px" }} pt={2}>(c) 2024 Nicola Kirk Counselling</Text>
            </Box>
          </Grid>

          <Grid item xs={4} sx={{ display: { sm: "flex", xs: "none" }, justifyContent: "center", flexDirection: "column" }}>
          <Box pt={1} sx={{ display: { sm: "flex", xs: "none" }, justifyContent: "center"}}>
          <Text>(c) 2024 Nicola Kirk Counselling</Text>
          </Box>
          </Grid>

          <Grid item xs={6} sm={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <Text sx={{ fontSize: { sm: "15px", xs: "8px" } }}>
           <CallIcon sx={{ fontSize: { sm: "13px", xs: "8px" } }} />{" "}0746 834 5451
            </Text>
            <Text sx={{ fontSize: { sm: "15px", xs: "6px" } }}>
           <EmailIcon sx={{ fontSize: { sm: "13px", xs: "8px" } }} />{" "}<a href="mailto:nicolakirkcounselling@proton.me">nicolakirkcounselling@proton.me</a>
            </Text>
            <Box sx={{ display: "flex", flexDirection: "row"}}>
            <LockIcon sx={{ fontSize: { sm: "13px", xs: "8px" } }} />
            <TextUnderline sx={{ fontSize: { sm: "15px", xs: "8px" } }} pl={1} onClick={() => handleNavigation('/privacy')}>
              {" "}Privacy Policy
            </TextUnderline>
            </Box>
          </Grid>
        </Grid>
       </Box>
      // </Grid>

  );
};


export default Footer;





