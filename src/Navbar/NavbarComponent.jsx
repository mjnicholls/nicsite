import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { HeaderText, ListText, ButtonNav } from "./Styles";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Is Counselling For Me?",
    link: "/approach",
  },
  {
    title: "About Me",
    link: "/about-me",
  },
  {
    title: "Cost",
    link: "/cost",
  },
  {
    title: "Book a Session",
    link: "/contact",
  },
];

const Navbar = (props) => {
  //const location = useLocation()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const history = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (link) => {
    history(link);
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", marginTop: "15px", backgroundColor: "white" }}
      >
        <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "center" }}
          >
<Box
  onClick={() => handleNavigation("/")}
  sx={{
    display: { xs: "none", sm: "flex" },
    mr: 1,
    cursor: "pointer",
    width: "155px",       
    height: "155px",        
    borderRadius: "50%",     
    overflow: "hidden",      
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img 
    src="../../../NewLogo.png" 
    alt="logo"
    style={{
      width: "155px",         // assuming original is larger
      height: "155px",
      objectFit: "cover",     // ensures fill
    }}
  />


            </Box>
            <Box sx={{  display: { xs: "none", sm: "flex" }, ml: 12, backgroundColor: "#eadfe9" }}>
            {pages.map((page) => (
              <ButtonNav
                key={page}
                //onClick={handleCloseNavMenu}
                onClick={() => handleNavigation(page.link)}
                sx={{ my: 1, mr: 2, ml:2 }}
              >
                <ListText pr={0} pl={0}>
                  {page.title}
                </ListText>
              </ButtonNav>
            ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <HeaderText
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                Nicola Kirk Counselling
              </HeaderText>

              <HeaderText
                sx={{ fontSize: "15px", display: { xs: "none", sm: "flex" } }}
                pt={1}
              >
                Glasgow City Centre, Clarkston, and Online
              </HeaderText> */}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                    onClick={() => handleNavigation(page.link)}
                  >
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <ListText>{page.title}</ListText>
                    </MenuItem>
                  </Box>
                ))}
              </Menu>
            </Box>
            <Box
              onClick={() => handleNavigation("/")}
              sx={{
                display: { xs: "none", sm: "flex" },
                mr: 1,
                cursor: "pointer",
              }}
            >
              {/* <img 
            src="../../../greenlogo.jpg" alt="logo" width="125px" height="125px"
          /> */}
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                mr: 1,
              }}
            >
              <HeaderText
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  ml: 2,
                  display: "flex",
                  fontSize: "15px",
                }}
              >
                Nicola Kirk Counselling
              </HeaderText>
              <Box
  onClick={() => handleNavigation("/")}
  sx={{
    display: { xs: "flex", sm: "none" },
    mr: 1,
    cursor: "pointer",
    width: "50px",       
    height: "50px",        
    borderRadius: "50%",     
    overflow: "hidden",      
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img 
    src="../../../NewLogo.png" 
    alt="logo"
    style={{
      width: "50px",         // assuming original is larger
      height: "50px",
      objectFit: "cover",     // ensures fill
    }}
  />


            </Box>
        
            </Box>
          </Toolbar>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              pt: 2,
            }}
          >
            {/* {pages.map((page) => (
              <ButtonNav
                key={page}
                //onClick={handleCloseNavMenu}
                onClick={() => handleNavigation(page.link)}
                sx={{ my: 2, mr: 4 }}
              >
                <ListText pr={2} pl={2}>
                  {page.title}
                </ListText>
              </ButtonNav>
            ))} */}
          </Box>
        </Container>
      </AppBar>
      <hr style={{ width: "200px", margin: "auto", marginTop: "15px" }} />
    </>
  );
};

export default Navbar;
