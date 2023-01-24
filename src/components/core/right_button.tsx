import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

export const RightButton = ({left, top}: any) => {
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
        <ChevronRightIcon color="inherit" />
        </Button>
      </Stack>
    );
  };