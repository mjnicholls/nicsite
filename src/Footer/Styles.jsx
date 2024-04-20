import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";

export const Text = styled(Typography)({
    fontFamily: "Kalam",
    fontWeight: 400,
    color: "black",
    textDecoration: "none",
})

export const TextUnderline = styled(Typography)({
    fontFamily: "Kalam",
    fontWeight: 400,
    color: "black",
    textDecoration: "none",
    "&:hover": {
    textDecoration: "underline",
    cursor: "pointer"
    }
})