import { Stack } from "@mui/system";
import Image from "next/image";
import smile from "../../assets/icon/smile.svg";
import { Text } from "./text";
import { Color } from "@/theme/color";

export const AddComment = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px solid #EFEFEF"
      width="614px"
      height="52px"
      marginTop={3}
    >
      <Stack direction="row" spacing={2.5} justifyContent="center" alignItems="center" marginLeft={2.5}>
        <Image width={24} height={24} src={smile} alt={""} />
        <Text fontSize="14px" fontWeight="400" color={Color.primary.black}>
          Add a comment...
        </Text>
      </Stack>
      <Stack marginRight={2.5}>
        <Text fontSize="14px" fontWeight="600" color={Color.primary.blue} opacity="0.3">
          Post
        </Text>
      </Stack>
    </Stack>
  );
};
