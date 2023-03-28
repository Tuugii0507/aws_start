import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { Text } from "./text";
import random_photo from "../../assets/image/1.png";
import more from "../../assets/icon/more.svg";
import { Color } from "@/theme/color";

export const InformationCard = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
        marginTop={3}
      >
        <Stack
          width="150px"
          height="150px"
          borderRadius="50%"
          overflow="hidden"
        >
          <Image width={150} height={150} src={random_photo} alt="" />
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={3}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="28px" fontWeight="350" color={Color.primary.black}>
              terrylucas
            </Text>
            <Button color="primary" size="large">
              Follow
            </Button>
            <Image src={more} alt="" />
          </Stack>
          <Stack spacing={5} direction="row" justifyContent="center" alignItems="center">
            <Text fontSize="16px" fontWeight="600" color={Color.primary.black}>
              1.258{" "}
              <Text
                fontSize="16px"
                fontWeight="400"
                color={Color.primary.black}
              >
                posts
              </Text>
            </Text>
            <Text fontSize="16px" fontWeight="600" color={Color.primary.black}>
              4M{" "}
              <Text
                fontSize="16px"
                fontWeight="400"
                color={Color.primary.black}
              >
                followers
              </Text>
            </Text>
            <Text fontSize="16px" fontWeight="600" color={Color.primary.black}>
              1.250{" "}
              <Text
                fontSize="16px"
                fontWeight="400"
                color={Color.primary.black}
              >
                following
              </Text>
            </Text>
          </Stack>
          <Text fontSize="16px" fontWeight="600" color={Color.primary.black}>Terry Lucas</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
