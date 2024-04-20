import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/NavbarComponent";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
