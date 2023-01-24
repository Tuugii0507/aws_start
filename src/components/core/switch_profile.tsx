import { Stack } from "@mui/system";
import Image from "next/image";
import random_photo from "../../assets/image/random_photo.png";
import { Text } from "./text";
import { Color } from "@/theme/color";

export const SwitchProfile = () => {
  return (
    <Stack
      width="293px"
      height="56px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop={2}
    >
         <Stack
        borderRadius={56}
        width="56px"
        height="56px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
      <Image width={56} height={56} src={random_photo} alt={""} />
      </Stack>
      <Stack direction="column" spacing={0.6} marginRight={6}>
        <Text fontSize="14px" fontWeight="600" color={Color.primary.black}>shirleyromero</Text>
        <Text fontSize="14px" fontWeight="200" color={Color.primary.gray}>Shirley Romero</Text>
      </Stack>
      <Text fontSize="12px" fontWeight="600" color={Color.primary.blue} cursor="pointer">Switch</Text>
    </Stack>
  );
};
