import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material'

export const Text = styled(Typography)({
    fontFamily: "Kalam",
    fontWeight: 700,
    color: "black",
    textDecoration: "none",
})

export const BoxGreen = styled(Box)({
    width: '200px',
    height: '200px',
    backgroundColor: '#daffd5',
    borderRadius: '50%',
    display: "flex", 
    justifyContent: "center",
    alignItems: "center"
})

export const BoxPurple = styled(Box)({
    width: '200px',
    height: '200px',
    backgroundColor: '#eadfe9',
    borderRadius: '50%',
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
})

export const BoxPurpleMain = styled(Box)({
    width: "100%",
    backgroundColor: '#eadfe9',
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '15px',
    padding:"10px 25px 10px 25px",
})

export const BoxGreenMain = styled(Box)({
    width: "100%",
    backgroundColor: '#daffd5',
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '15px',
    padding: "10px 25px",
})