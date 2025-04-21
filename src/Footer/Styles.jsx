import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Text = styled(Typography)({
  fontFamily: "PlayfairDisplayVariable",
  fontVariationSettings: '"wght" 500',
  fontWeight: 500,
  color: "black",
  textDecoration: "none",
});

export const TextUnderline = styled(Typography)({
  fontFamily: "PlayfairDisplayVariable",
  fontVariationSettings: '"wght" 500',
  fontWeight: 500,
  color: "black",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});
