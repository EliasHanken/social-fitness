import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} fontWeight="500" variant="h5">
          Advert
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://social-fitness.onrender.com/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", marginTop: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Cosmetics</Typography>
        <Typography color={medium}>Cosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your path to beauty and health starts here with our wide range of
        products.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
