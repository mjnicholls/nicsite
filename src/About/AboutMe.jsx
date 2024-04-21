import React from "react";
import { Box, Grid } from "@mui/material";
import { Text } from "./Styles";
import { MainText } from "../globalStyles";
import { BookButton } from "../Home/Styles";
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {

  const history = useNavigate();

  const handleNavigation = (link) => {
    history(link);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }} pt={4}>
        <Text sx={{ fontSize: { sm: "30px", xs: "15px" } }}>About Me</Text>
      </Box>
      
      <Grid
        container
        spacing={2}
        pt={{ xs: 6, sm: 6 }}
        pl={{ xs: 4, sm: 12 }}
        pr={{ xs: 3, sm: 12 }}
        pb={{ xs: 4, sm: 8 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          xs={4}
          sx={{ display: { sm: "flex", xs: "none" }, justifyContent: "center", backgroundColor: "#daffd5", borderRadius: { sm: "15px 0px 0px 15px" }}}
        >
            <Box pt={2}>
              <img width="220px" height="300px" alt="Nicola Kirk" src="../../../nic6.jpg" />
            </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          sx={{ display: { sm: "flex" }, flexDirection: "column", backgroundColor: "#daffd5", borderRadius: { sm: "0px 15px 15px 0px", xs: "15px 15px 15px 15px" } }}
          pr={4}
        >
          <MainText sx={{ fontSize: { sm: "30px", xs: "20px" }, fontFamily: "Kalam" }} pb={1} pt={2}>
            NICOLA KIRK
          </MainText>
          <MainText sx={{ fontSize: { sm: "25px", xs: "15px" } }} pb={3}>
            HUMANISTIC INTEGRATIVE COUNSELLOR
          </MainText>

          <Box pb={2} sx={{ display: { sm: "none", xs: "flex" }, justifyContent: "center" }}>
              <img width="220px" height="300px" alt="Nicola Kirk" src="../../../nic6.jpg" />
            </Box>

          <MainText sx={{ fontSize: { sm: "22px", xs: "17px" }, fontFamily: "Kalam" }}>
          Why did I become a counsellor?
          </MainText>
          <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            <p>
            Therapy changed my life. In my 20s, I struggled with my mental health and began a course of therapy. The warmth and unconditional support offered to me by my therapist was a lifeline during a difficult time.
            </p>
            <p>
            After my therapy ended, my interest in mental health continued to grow. I knew that I wanted to offer the same help to others that had been given to me, so I left my career in education to train as a counsellor. It was the best decision I ever made.
            </p>
            <p>
            Because of my own struggles in the past, I combine personal insights into mental health with professional training and experience in counselling. We all face challenges in our lives at times and this can feel very isolating. But whatever you are going through, I can walk alongside you and help you to work through it.
            </p>
          </MainText>

          <MainText sx={{ fontSize: { sm: "22px", xs: "17px" }, fontFamily: "Kalam" }} pt={2}>
          What I can help you with:
          </MainText>

          <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
          <ul>
              <li>Low mood and depression</li>
              <li>Anxiety and panic</li>
              <li>Stress</li>
              <li>Bereavement</li>
              <li>Substance / alcohol misuse</li>
              <li>Loneliness and isolation</li>
              <li>Relationship issues</li>
              <li>Low self-esteem</li>
            </ul>
          </MainText>

          <MainText pb={2} sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
          Maybe your issue isn’t on this list? If so, please get in touch to tell me more about yourself, then we can work out if I have the right skills to help you.
          </MainText>

          <Box sx={{ display: "flex", justifyContent: "center"}} pt={2} pb={2}>
          <BookButton onClick={() => handleNavigation("/contact")}>
                <Text>
                Ask Nicola a question
                </Text>
                </BookButton>
              </Box>

              <MainText sx={{ fontSize: { sm: "22px", xs: "17px" }, fontFamily: "Kalam" }} pt={2}>
          What is my professional experience?
          </MainText>
          <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            <p>
            I have been working in the mental health field in and around Glasgow since 2021. This includes, most recently, working as a counsellor with two established counselling organisations: Crisis Counselling and The Wynd Centre. Prior to this, starting in 2021, I worked as a distress response worker for a service that supports people in crisis.  
            </p>
            <p>
            Before becoming a counsellor, I spent many years working in education with young people with additional support needs, including young people who had been through difficult childhood experiences. 
            </p>
            <p>
            I bring this diverse experience into my counselling practice and am continuously developing my skills. The learning never stops — nor would I want it to!
            </p>

            <MainText sx={{ fontSize: { sm: "22px", xs: "17px" }, fontFamily: "Kalam" }} pt={2}>
          What is my approach to counselling?
          </MainText>
          <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
            <p>
            I am trained in Humanistic Counselling, a method that focuses on seeing you as a whole and unique person.
            </p>

            <p>
            Humanistic Counselling encourages people to think about their feelings, and take responsibility for their thoughts and actions. The emphasis is on self-development and achieving your highest potential, rather than on “problem” behaviour (to find out more about the Humanistic approach, <a href="https://www.bacp.co.uk/about-therapy/types-of-therapy">
            please visit BACP.
              </a>). 
            </p>
            <p>
            I work in a person-centred way and treat everyone as an individual. On a therapy journey with me, I’ll draw upon my knowledge of other Humanistic therapies to find the right approach. I believe in tailoring therapy to your needs and having an open, ongoing conversation about what works best for you. 
            </p>
            </MainText>
           
          </MainText>

        
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
