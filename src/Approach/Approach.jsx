import React from "react";
import { Box, Grid } from "@mui/material";
import { Text } from './Styles'
import { BoxGreen, BoxPurple, BoxPurpleMain, BoxGreenMain } from "./Styles";
import { MainText } from "../globalStyles";

const Approach = () => {

  return (

<>
<Box sx={{ display: "flex", justifyContent: "center"}} pt={4}>
  <Text sx={{ fontSize: { sm: "30px", xs: "15px"} }}>Is Counselling For Me?</Text>
</Box>
<Grid
  container
  spacing={2}
  pt={{ xs: 0, sm: 4, md: 4 }}
  pl={{ xs: 0, sm: 12, md: 12 }}
  pr={{ xs: 0, sm: 12, md: 12 }}
  pb={{ xs: 0, sm: 0, md: 0 }}
  sx={{ display: "flex", justifyContent: "center" }}>

<Grid item xs={4} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxPurple>
<Text>WHAT IS COUNSELLING?</Text>
</BoxPurple>

</Grid>

<Grid item xs={12} sx={{ display: { sm: "none", xs: "flex"}, justifyContent: "center", flexDirection: "row" }} mt={4} mr={3} ml={3}>
<BoxGreenMain sx={{ padding: "10px 10px 10px 10px" }}>

  <MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>

  <Text sx={{ fontSize: "10px"}}>WHAT IS COUNSELLING?</Text>
<hr></hr>
    <p>Counselling is about offering a listening ear to someone in need of emotional support. The role of a counsellor is to sit alongside you and help you set your own goals to overcome the challenges you are experiencing. 
</p>
    <p>
    As psychologist Gerard Egan points out: “Helpers are effective to the degree that clients, through the helping process, learn how to help themselves more effectively.”  </p>
    <p>
    This is just another way of saying that counselling is a collaborative process where we work out the best way forward for you. It’s a supportive partnership. </p>
    </MainText>
</BoxGreenMain>
</Grid>

<Grid item xs={8} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxGreenMain sx={{ padding: { xs: "0px 10px 0px 0px", sm: "10px 25px" }}}>

  <MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>
    <p>Counselling is about offering a listening ear to someone in need of emotional support. The role of a counsellor is to sit alongside you and help you set your own goals to overcome the challenges you are experiencing. 
</p>
    <p>
    As psychologist Gerard Egan points out: “Helpers are effective to the degree that clients, through the helping process, learn how to help themselves more effectively.”  </p>
    <p>
    This is just another way of saying that counselling is a collaborative process where we work out the best way forward for you. It’s a supportive partnership. </p>
    </MainText>
</BoxGreenMain>
</Grid>

</Grid>

<Grid container spacing={0} 
pt={{ xs: 3, sm: 6 }} pl={{ xs: 0, sm: 12 }} pr={{ xs: 0, sm: 12 }} pb={{ xs: 0, sm: 6 }}
sx={{ display: "flex", justifyContent: "center"}}>

<Grid item xs={8} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxPurpleMain sx={{ padding: { xs: "0px 0px 0px 10px", sm: "10px 25px" }}}>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>
    <p>At Nicola Kirk Counselling in Clarkston, near Glasgow we will meet in a safe and calm private counselling room. If you prefer online or telephone counselling, I offer those services too.
</p>
<p>
  I aim to create a caring, confidential and non-judgemental space for clients. My approach is to see the whole person and their potential, rather than focusing on specific behaviours or traits. In our sessions together, I’ll follow your lead and explore whatever you want to look at that day.
  </p>
<p>
My goal is to build a trusting therapeutic relationship where you can talk about your feelings openly and explore any areas you want to work on. This way, you can find your own solutions to issues that you’re facing and feel empowered to move forward.
  </p>
  <p>
  To find out more, please book a free introductory call with me.
  </p>
    </MainText>

</BoxPurpleMain>
</Grid>

<Grid item xs={12} sx={{ display: { sm: "none", xs: "flex"}, justifyContent: "center", flexDirection: "row" }} mt={0} mr={3} ml={3}>
<BoxPurpleMain sx={{ padding: "10px 10px 10px 10px" }}>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>

<Text sx={{ fontSize: "10px"}}>WHAT HAPPENS IN A SESSION?</Text>
<hr></hr>
    <p>At Nicola Kirk Counselling in Clarkston, near Glasgow we will meet in a safe and calm private counselling room. If you prefer online or telephone counselling, I offer those services too.
</p>
<p>
  I aim to create a caring, confidential and non-judgemental space for clients. My approach is to see the whole person and their potential, rather than focusing on specific behaviours or traits. In our sessions together, I’ll follow your lead and explore whatever you want to look at that day.
  </p>
<p>
My goal is to build a trusting therapeutic relationship where you can talk about your feelings openly and explore any areas you want to work on. This way, you can find your own solutions to issues that you’re facing and feel empowered to move forward.
  </p>
  <p>
  To find out more, please book a free introductory call with me.
  </p>
    </MainText>
</BoxPurpleMain>
</Grid>

<Grid item xs={4} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}} pl={2}>
<BoxGreen>
<Text sx={{ fontSize: "15px" }}>WHAT HAPPENS IN A SESSION?</Text>
</BoxGreen>

</Grid>

</Grid>


<Grid container spacing={2} pt={{ xs: 3, sm: 0 }} pl={{ xs: 0, sm: 12 }} pr={{ xs: 0, sm: 12 }} pb={{ xs: 0, sm: 0 }} sx={{ display: "flex", justifyContent: "center" }}>

<Grid item xs={4} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxPurple>
<Text sx={{ fontSize: "15px" }}>THE THERAPEUTIC RELATIONSHIP</Text>
</BoxPurple>
</Grid>

<Grid item xs={8} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxGreenMain sx={{ padding: { xs: "0px 10px 0px 0px", sm: "10px 25px" }}}>

  <MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>
    <p>In order to facilitate the formation of a trusting relationship between counsellor and client, it is important to have clear boundaries, which provide a framework to work within and reveal the limitations of what is acceptable on both sides of the therapeutic relationship. If you choose to attend counselling sessions, I will draw up a contract with you which makes clear the boundaries that we will both work within.</p>

<p>It is important to note that you will take part in the drawing up of this contract, it isn’t something that will be forced upon you. Boundaries create a safe environment in which you can explore issues important to you and each session will be fifty minutes long. I work in an open-ended way and I will review how things are going with you regularly to make sure that you are getting the most from sessions.</p>

    </MainText>
</BoxGreenMain>
</Grid>

<Grid item xs={12} sx={{ display: { sm: "none", xs: "flex"}, justifyContent: "center", flexDirection: "row" }}  mr={3} ml={3}>
<BoxGreenMain sx={{ padding: "10px 10px 10px 10px" }}>

  <MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>

  <Text sx={{ fontSize: "10px"}}>THE THERAPEUTIC RELATIONSHIP</Text>
<hr></hr>
<p>In order to facilitate the formation of a trusting relationship between counsellor and client, it is important to have clear boundaries, which provide a framework to work within and reveal the limitations of what is acceptable on both sides of the therapeutic relationship. If you choose to attend counselling sessions, I will draw up a contract with you which makes clear the boundaries that we will both work within.</p>

<p>It is important to note that you will take part in the drawing up of this contract, it isn’t something that will be forced upon you. Boundaries create a safe environment in which you can explore issues important to you and each session will be fifty minutes long. I work in an open-ended way and I will review how things are going with you regularly to make sure that you are getting the most from sessions.</p>
    </MainText>
</BoxGreenMain>
</Grid>

</Grid>

<Grid container spacing={0} 
pt={{ xs: 3, sm: 6 }} pl={{ xs: 0, sm: 12 }} pr={{ xs: 0, sm: 12 }} pb={{ xs: 6, sm: 6 }}
sx={{ display: "flex", justifyContent: "center"}}>

<Grid item xs={8} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}}>
<BoxPurpleMain sx={{ padding: "10px 10px 10px 20px" }}>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>
    <p>I am a qualified counsellor and I work within the BACP’s ethical framework, which can be found <a href="https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/">here.</a></p>
    <p>
     To learn more about what therapy can help with, <a href="https://www.bacp.co.uk/about-therapy/what-therapy-can-help-with/">click here</a>.</p>
     <p>
     To learn more about different types of therapy available, <a href="https://www.bacp.co.uk/about-therapy/types-of-therapy/">click here</a>.</p>

    </MainText>

</BoxPurpleMain>
</Grid>


<Grid item xs={12} sx={{ display: { sm: "none", xs: "flex"}, justifyContent: "center", flexDirection: "row" }} mt={0} mr={3} ml={3}>
<BoxPurpleMain sx={{ padding: "10px 10px 10px 10px" }}>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" }}}>

<Text sx={{ fontSize: "10px"}}>LEARN MORE?</Text>
<hr></hr>
<p>I am a qualified counsellor and I work within the BACP’s ethical framework, which can be found <a href="https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/">here.</a></p>
    <p>
     To learn more about what therapy can help with, <a href="https://www.bacp.co.uk/about-therapy/what-therapy-can-help-with/">click here</a>.</p>
     <p>
     To learn more about different types of therapy available, <a href="https://www.bacp.co.uk/about-therapy/types-of-therapy/">click here</a>.</p>
    </MainText>
</BoxPurpleMain>
</Grid>

<Grid item xs={4} sx={{ display: { sm: "flex", xs: "none"}, justifyContent: "center"}} pl={2}>
<BoxGreen>
<Text>LEARN MORE?</Text>
</BoxGreen>

</Grid>

</Grid>
</>
  );
};


export default Approach;





