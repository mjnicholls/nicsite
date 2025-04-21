import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const HeaderText = styled(Typography)({
  fontFamily: "PlayfairDisplayVariableBold",
  fontVariationSettings: '"wght" 500',
  fontWeight: 500,
  color: "black",
  textDecoration: "none",
  fontSize: "30px",
});

export const ListText = styled(Typography)({
  fontFamily: "PlayfairDisplayVariableBold",
  fontVariationSettings: '"wght" 500',
  fontWeight: 500,
  color: "black",
  textDecoration: "none",
});

export const ButtonNav = styled(Button)({
  color: "black",
  display: "block",
  backgroundColor: "#eadfe9",
  //border: "1px solid black",
  "&:hover": {
    //backgroundColor: "#e3e3e3",
    textDecoration: "underline"
  },
});
