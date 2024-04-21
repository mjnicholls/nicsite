import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export const MainText = styled(Typography)({
    fontFamily: "Josefin Sans",
    fontSize: "16px",
})

export const DropCap = styled("span")({
    float: "left",
    fontSize: "4em",
    lineHeight: 1.1,
    marginRight: "0.1em",
})

export const BookButton = styled(Button)({
    backgroundColor: "#eadfe9",
    borderRadius: "10px",
    paddingTop: "10px",
    "&:hover": {
        backgroundColor: "#f0f5f9"
    }
})

