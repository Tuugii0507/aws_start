import Stack from "@mui/material/Stack";
import Image from "next/image";
import random_photo from "../../assets/image/random_photo.png";
import { Text } from "./text";
import { Color } from "@/theme/color";

export const Story = ({el}: any) => {
  return (
    <Stack
      spacing={0.6}
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginLeft={1.5}
    >
      <Stack
        borderRadius={56}
        border="3px solid rgba(222, 0, 70, 1)"
        width="66px"
        height="66px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
         <Stack
        borderRadius={56}
        width="60px"
        height="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Image width={60} height={60} src={random_photo} alt={""} />
        </Stack>
      </Stack>
      <Text
        color={Color.primary.black}
        fontSize="12px"
        fontWeight="200"
        cursor="pointer"
        letterSpacing={0.12}
        height={4}
      >
        your story{el}
      </Text>
    </Stack>
  );
};
