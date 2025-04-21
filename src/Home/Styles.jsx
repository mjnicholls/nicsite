import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export const MainText = styled(Typography)({
  fontFamily: "PlayfairDisplayVariable",
  fontVariationSettings: '"wght" 500',
  fontWeight: 500,
  fontSize: "16px",
});

export const DropCap = styled("span")({
  float: "left",
  fontSize: "4em",
  lineHeight: 1.1,
  marginRight: "0.1em",
});

export const BookButton = styled(Button)({
  backgroundColor: "#eadfe9",
  borderRadius: "10px",
  paddingTop: "5px",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "#abb8b5",
  },
});
