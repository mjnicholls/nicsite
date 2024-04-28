import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./Home/Home";
import Approach from "./Approach/Approach";
import AboutMe from "./About/AboutMe";
import Cost from './Cost/Cost'
import Contact from "./Contact/Contact";
import Privacy from "./Privacy/Privacy";
import { Box } from '@mui/material';
import { MainText } from "./globalStyles";
import { Text } from "./About/Styles";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <div style={containerStyle}>
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/cost" element={<Cost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Layout>
        </div>
      </Suspense>
    </Router>
  );
}

// Component for handling 404 errors
function NoMatch() {
  const location = useLocation();

  // You can customize the message or UI here
  return (
    <Box sx={{ pl: { sm: 12, xs: 3 }, pr: { sm: 12, xs: 2}, pb: { sm: 4, xs: 2 }} }>

    <Box sx={{ display: "flex", justifyContent: "center", pb: { sm: 4, xs: 2 }}} pt={4}>
    
            <Text 
            sx={{ fontSize: { sm: "30px", xs: "15px" } }}
            >
            Oops!
            </Text>
    
    </Box>
    
    <Box sx={{ backgroundColor: "#daffd5", borderRadius: "15px", display: "flex", justifyContent: "center" }} p={4} mb={4}>
    <MainText pb={2} sx={{ fontSize: { xs: "12px", sm: "24px" } }}>
    <h3>The page <code>{location.pathname}</code> does not exist. Have a lovely afternoon.</h3>
    </MainText>
    </Box>
    </Box>
    
  );
}

export default App;
