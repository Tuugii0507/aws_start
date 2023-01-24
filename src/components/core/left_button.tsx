import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

export const LeftButton = ({ left, top }: any) => {
  return (
    <Stack
      borderRadius={22}
      border="1px solid #ffffff"
      bgcolor="#ffffff"
      justifyContent="center"
      alignItems="center"
      width={22}
      height={22}
      position="absolute"
      marginLeft={left}
      marginTop={top}
    >
      <Button>
        <ChevronLeftIcon color="inherit" />
      </Button>
    </Stack>
  );
};
