import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { BookButton, DropCap, MainText } from "./Styles";
import { Text } from "../Approach/Styles";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const history = useNavigate();

  const handleNavigation = (link) => {
    history(link);
  };

  return (
    <>
      <Box sx={{ p: { sm: 8, xs: 2 }}} pt={4}>
        <Grid container sx={{ backgroundColor: "#daffd5", borderRadius: "15px", p: { xs: 2, sm: 4} }}>
          <Grid item sm={4} sx={{ display: { xs: "none", sm: "flex" }, alignItems: "top", justifyContent: "center"}}>
            <Box>
              <img width="220px" height="300px" alt="Nicola Kirk" src="../../../nic4.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>

          <Text sx={{ display: { sm: "none" }, fontSize: "16px",}} pt={2} pb={2}>
              Confidential, compassionate counselling in Clarkston, near Glasgow and online
              </Text>
          <Box>
              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              <DropCap>C</DropCap>ounselling can help you to face life’s challenges, feel better about painful experiences, and find a way forward.
                </MainText>
                </Box>
            <Box>
            <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              Counselling goes beyond “just talking”. That’s definitely a big part of it — and having someone to talk to can make a real difference. But it’s also about so much more than that. 
              </MainText>

              <Text sx={{ display: { xs: "none" }, fontSize: { sm: "20px", xs: "15px" }}} pt={2} pb={2}>
              Confidential, compassionate counselling in Clarkston, near Glasgow and online
              </Text>
              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              On a counselling journey with me, I can help you overcome any blocks holding you back, find solutions to personal and relationship challenges, and work through difficult experiences from your past. I can also help you with issues like depression, anxiety and low self-esteem. 
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I understand that speaking to a stranger might feel daunting at first. But I offer caring support and a non-judgmental perspective, no matter what you’re facing. 
              </MainText>

              <Text sx={{ fontSize: { sm: "20px", xs: "15px" }}} pb={2} pt={2}>
              Who Am I?
              </Text>

              <Box sx={{ display: { sm: "none"}, pb: 2}}>
              <img width="220px" height="300px" alt="Nicola Kirk" src="../../../nic4.jpg" />
            </Box>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I’m Nicola Kirk, a fully qualified, experienced counsellor in Clarkston, near Glasgow southside. 
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              My qualifications and memberships are as follows:
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              <ul>
              <li>Member of the British Association for Counselling and Psychotherapy (BACP)</li>
              <li>Diploma in Humanistic Counselling (BACP approved)</li>
              <li>Higher National Certificate in Counselling</li>
              <li>Professional Development Award in Addiction Counselling</li>
              <li>How to do counselling online: a coronavirus primer</li> 
              <li>I am currently studying towards a Diploma in Therapeutic Safety in Trauma</li>

              </ul>
              </MainText>

              <Text pb={2} sx={{ fontSize: { sm: "20px", xs: "15px" } }}>
              What’s the next step?
              </Text>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              Taking that first step into counselling can feel daunting but I’m here for you. To find out more about Nicola Kirk Counselling in Clarkston, near Glasgow or online, book a free introductory call with me. This way, we can find out if we’d like to work together.  
              </MainText>

              <Box sx={{ display: "flex", justifyContent: "center"}} pt={2} pb={2}>
              <BookButton onClick={() => handleNavigation("/contact")}>
                <Text>
                Click here to book a session with Nicola
                </Text>
                </BookButton>
                </Box>

  
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
