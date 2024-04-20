import React from 'react';
import { Box } from '@mui/material';
import { MainText } from "../globalStyles";
import { Text } from "../About/Styles";

const Contact = () => {

  return (

    <Box sx={{ pl: { sm: 12, xs: 3}, pr: { sm: 12, xs: 2}, pb: { sm: 4, xs: 36 }} }>


<Box sx={{ display: "flex", justifyContent: "center", pb: { sm: 4, xs: 2} }} pt={4}>
        <Text sx={{ fontSize: { sm: "30px", xs: "15px" } }}>Book a Session</Text>
</Box>

      <Box pt={4} pb={6} mb={4} 
      sx={{ 
        pl:{ sm: 8, xs: 1},
        pr:{ sm: 8, xs: 1},
        backgroundColor: "#daffd5",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column"
        }}>

      <MainText sx={{ fontSize: { xs: "12px", sm: "22px" } }}>
            
            To book a session or make an enquiry, email me at <a href="mailto:comeasyouarecounselling@proton.me">nicolakirkcounselling@proton.me</a>
    
      </MainText>

      <MainText sx={{ fontSize: { xs: "12px", sm: "22px" } }} pt={3}>
            
            Alternatively, call or send a text to 0746 834 5451
    
      </MainText>

        </Box>
    </Box>
  );
};

export default Contact;
