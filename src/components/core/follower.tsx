import { Stack } from "@mui/system";
import Image from "next/image";
import { Text } from "./text";
import random_photo1 from "../../assets/image/1.png";
import { Color } from "@/theme/color";

export const Follower = () => {
  return (
    <Stack
      width="293px"
      height="56px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        borderRadius={56}
        width="32px"
        height="32px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Image width={32} height={32} src={random_photo1} alt={""} />
      </Stack>
      <Stack direction="column" spacing={0.6} marginRight={4}>
        <Text fontSize="14px" fontWeight="400" color={Color.primary.black}>
          terylucas
        </Text>
        <Text fontSize="12px" fontWeight="200" color={Color.primary.gray}>
          Followed by terylucas + 2 more
        </Text>
      </Stack>
      <Text
        fontSize="12px"
        fontWeight="600"
        color={Color.primary.blue}
        cursor="pointer"
      >
        Follow
      </Text>
    </Stack>
  );
};
