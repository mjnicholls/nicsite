import React from 'react';
import { Box } from '@mui/material';
import { MainText } from "../globalStyles";
import { Text } from "../About/Styles";

const Contact = () => {

  return (

    <Box sx={{ pl: { sm: 12, xs: 3}, pr: { sm: 12, xs: 2}, pb: { sm: 4, xs: 20 }} }>


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

      <MainText sx={{ fontSize: { xs: "12px", sm: "22px" } }} pt={3}>
            
            You can also book an appointment through <a href="https://www.counselling-directory.org.uk/counsellors/nicola-kirk">Counselling Directory</a> or <a href="https://www.psychologytoday.com/gb/counselling/nicola-kirk-clarkston-sct/1292608">Psychology Today</a>
    
      </MainText>



      <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", mr: 1, pt:4 }} >
          <img 
              src="../../../greenlogo.jpg" alt="logo" width="400" height="400"
          />
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center", mr: 1, pt:4 }} >
          <img 
              src="../../../greenlogo.jpg" alt="logo" width="200" height="200"
          />
          </Box>

        </Box>
    </Box>
  );
};

export default Contact;
