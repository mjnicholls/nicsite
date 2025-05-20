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
        <Grid container sx={{ backgroundColor: "#eadfe9", borderRadius: "15px", p: { xs: 2, sm: 4} }}>
          <Grid item sm={4} sx={{ display: { xs: "none", sm: "flex" }, alignItems: "top", justifyContent: "center"}}>
            <Box>
              <img width="320px" height="250px" alt="Nicola Kirk" src="../../../NewFace.png" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>

          <Text sx={{ display: { sm: "none" }, fontSize: "16px",}} pt={2} pb={2}>
              Confidential, compassionate counselling in Glasgow City Centre, Clarkston, and online
              </Text>
          <Box>

          <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
          <DropCap>H</DropCap>ave you been through difficult past experiences that affect you in the here and now? Do you feel overwhelmed? Perhaps you feel down, anxious or stressed about your current life situation? It can feel daunting to reach out for help when we feel this way, but talking about this with someone impartial can help you to gain a new perspective and more clarity of mind.
              </MainText>
              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I’m a Glasgow-based counsellor providing support for issues like trauma, anxiety and stress, low mood, loss and bereavement, among others.
                </MainText>
                </Box>
            <Box>
            <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
            When we have been through traumatic experiences it can be difficult to find a sense of safety in the world and within ourselves. If you can relate to this, then during our time together we will focus on increasing your sense of safety, primarily through the quality of our therapeutic relationship, which can be a steadying anchor in times of extreme stress, and also through developing a shared understanding of the nervous system and how it responds to stress.  
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              We will look at ways of feeling more secure by working with the body and the nervous system, as well as the mind. One doesn’t exist without the other, and as Bessel van der Kolk, a key figure in trauma research, says:
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              <blockquote><b>“In order to change, people need to become aware of their sensations and the way that their bodies interact with the world around them. Physical self-awareness is the first step in releasing the tyranny of the past.” </b>
                </blockquote>
              </MainText>

              <Text sx={{ display: { xs: "none" }, fontSize: { sm: "20px", xs: "15px" }}} pt={2} pb={2}>
              Confidential, compassionate counselling in Glasgow City Centre, Clarkston, and online
              </Text>


              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I have a special interest in trauma and have a trauma-informed practice, providing you with a confidential, non-judgemental space to explore whatever is troubling you. I listen carefully and aim to see things from your perspective. I believe that you are the expert on your own life and that you have an innate ability to grow and thrive, even though this may be hard for you to see at the moment. My role is to be alongside you, collaborating with you to find the best path forward to whatever it is that you wish to achieve through counselling.
              </MainText>

              <Text sx={{ fontSize: { sm: "20px", xs: "15px" }}} pb={2} pt={2}>
              Who Am I?
              </Text>

              <Box sx={{ display: { sm: "none"}, pb: 2}}>
              <img width="180px" height="120px" alt="Nicola Kirk" src="../../../NewFace.png" />
            </Box>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              I’m Nicola Kirk, a fully qualified, committed counsellor in Glasgow City Centre, Clarkston, and online. 
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              My qualifications and memberships are as follows:
              </MainText>

              <MainText pb={2} sx={{ fontSize: { sm: "18px", xs: "15px" } }}>
              <ul>
              <li>Member of the British Association for Counselling and Psychotherapy (BACP)</li>
              <li>Diploma in Counselling</li>
              <li>Higher National Certificate in Counselling</li>
              <li>Professional Development Award in Addiction Counselling</li>
              <li>How to do counselling online: a coronavirus primer</li> 
              <li>Certificate in Online and Telephone Counselling (ACTO recognised)</li>
              <li>ASIST (Applied Suicide Intervention Skills Training)</li>
              <li>Emotion-Focused Therapy (EFT) Level 1 Advanced Professional Training </li>
              <li>Foundation Diploma in Therapeutic Safety in Trauma (NCPS checked)</li>

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
