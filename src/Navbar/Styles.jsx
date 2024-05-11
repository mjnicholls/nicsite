import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export const HeaderText = styled(Typography)({
    fontFamily: "Kalam",
    fontWeight: 400,
    color: "black",
    textDecoration: "none",
    fontSize: "30px"
})

export const ListText = styled(Typography)({
    fontFamily: "Kalam",
    fontWeight: 400,
    color: "black",
    textDecoration: "none",
})

export const ButtonNav = styled(Button)({
    color: "black", 
    display: "block", 
    backgroundColor: "#daffd5", 
    border: "1px solid black",
    "&:hover": {
        backgroundColor: "#eadfe9"
    }
})