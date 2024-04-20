import React from "react";
import { Box } from "@mui/material";
import { MainText } from "../globalStyles";
import { Text } from "../About/Styles";
import { BoxGreen } from "../Approach/Styles";

const Cost = () => {
  return (
    <>

<Box sx={{ pl: { sm: 12, xs: 3}, pr: { sm: 12, xs: 3}, pb: { sm: 4, xs: 18 }} }>

<Box sx={{ display: "flex", justifyContent: "center", pb: { sm: 4, xs: 2 }}} pt={4}>
        <Text sx={{ fontSize: { sm: "30px", xs: "15px" } }}>Cost</Text>
</Box>

      <Box 
      sx={{ 
            backgroundColor: '#eadfe9', 
            borderRadius: "15px", 
            pl: { sm: 8, xs: 3 },
            pr: { sm: 8, xs: 3 },  
      }}
       pb={2} pt={4}>

      <MainText sx={{ fontSize: { sm: "30px", xs: "17px" }, fontFamily: "Kalam" }} >
            FEES
          </MainText>

      <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            <p>
            I charge a fee of £50 per fifty-minute counselling session.
            </p>
      </MainText>

      <MainText sx={{ fontSize: { sm: "30px", xs: "17px" }, fontFamily: "Kalam" }} pt={2}>
      REDUCED FEE RATES
          </MainText>

        <MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            <p>
            I can charge a reduced fee for clients who are claiming benefits, on low incomes, or students. We can discuss your requirements during the initial call to determine which option is best for you. I review my fees on an annual basis in January and will give you two calendar months’ notice of any proposed increase. 
            </p>
        </MainText>
        </Box>
    </Box>
    </>
  );
};

export default Cost;
