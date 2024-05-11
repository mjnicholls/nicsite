import React from "react";
import { Box, Grid } from "@mui/material";
import { BookButton, DropCap, MainText } from "./Styles";
import { Text } from "../Approach/Styles";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const history = useNavigate();

  const handleNavigation = (link) => {
    history(link);
    window.scrollTo(0, 0);
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
          <DropCap>S</DropCap>ometimes we reach a point when we realise things haven’t been right for a while. We feel stuck in one place and perhaps we can’t even put our finger on the reason why. We feel our emotions are in control of us and it can feel scary. We might be going through a transition in life which leaves us questioning who we are now, and we may even question our own self-worth. It can feel almost impossible to reach out for help.
              </MainText>
              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I’m a Glasgow-based counsellor and can provide support for issues like anxiety and stress, low mood, loss and bereavement. 
                </MainText>
                </Box>
            <Box>
            <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
            I provide you with a confidential, safe space to talk about whatever it is that is troubling you. I listen carefully and try to understand things from your perspective, without judgement. I believe that you are the expert on your own life and that you have an innate ability to grow and thrive. My role is to be alongside you in finding the best path forward.  
              </MainText>

              <Text sx={{ display: { xs: "none" }, fontSize: { sm: "20px", xs: "15px" }}} pt={2} pb={2}>
              Confidential, compassionate counselling in Clarkston, near Glasgow and online
              </Text>


              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I understand that speaking to a stranger might feel daunting at first, but I offer caring support and a non-judgmental perspective, no matter what you’re facing. 
              </MainText>

              <Text sx={{ fontSize: { sm: "20px", xs: "15px" }}} pb={2} pt={2}>
              Who Am I?
              </Text>

              <Box sx={{ display: { sm: "none"}, pb: 2}}>
              <img width="220px" height="300px" alt="Nicola Kirk" src="../../../nic4.jpg" />
            </Box>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I’m Nicola Kirk, a fully qualified, committed counsellor in Clarkston, near Glasgow southside. 
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
              Taking that first step into counselling can feel daunting but I’m here for you. To find out more about how I work, you can book a free introductory call with me. This way, we can find out how well we’d work together. 
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
