import { Stack } from "@mui/system";
import Image from "next/image";
import { Text } from "./text";
import { Color } from "@/theme/color";
import random_photo from "../../assets/image/1.png";
import random_photo2 from "../../assets/image/2.png";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import heart from "../../assets/icon/heart.svg";
import red_heart from "../../assets/icon/red_heart.svg";
import message from "../../assets/icon/message.svg";
import send from "../../assets/icon/send.svg";
import share from "../../assets/icon/share.svg";
import { AddComment } from "./add_comment";
import { Carousel } from "./carousel";
import { useState } from "react";

export const Post = () => {
  const [isheart, setHeart] = useState(false);
  const ClickHeart = () => {
    setHeart(!isheart);
  };

  const photos = [random_photo, random_photo2];

  return (
    <Stack
      width="614px"
      border="1px solid #EFEFEF"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        marginTop={1}
        width="614px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          borderRadius={56}
          border="3px solid rgba(222, 0, 70, 1)"
          width="42px"
          height="42px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginLeft={1}
          marginBottom={1}
        >
          <Stack
            borderRadius={56}
            width="38px"
            height="38px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Image width={38} height={38} src={random_photo} alt={""} />
          </Stack>
        </Stack>
        <Stack marginRight={53}>
          <Text fontSize="14px" fontWeight="600" color={Color.primary.black}>
            terrylucas
          </Text>
        </Stack>
        <Stack marginRight={1.5}>
          <MoreHorizSharpIcon />
        </Stack>
      </Stack>
      <Carousel photos={photos}/>
      {/* <Image width={614} height={614} src={random_photo2} alt={""} /> */}
      <Stack
        width={614}
        height={54}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={3} marginLeft={2}>
          {isheart === false ? (
            <Image
              width={23}
              height={23}
              src={heart}
              alt={""}
              onClick={ClickHeart}
            />
          ) : (
            <Image
              width={23}
              height={23}
              src={red_heart}
              alt={""}
              onClick={ClickHeart}
            />
          )}

          <Image width={23} height={23} src={message} alt={""} />
          <Image width={23} height={23} src={send} alt={""} />
        </Stack>
        <Stack marginRight={2.5}>
          <Image width={23} height={23} src={share} alt={""} />
        </Stack>
      </Stack>
      <Stack direction="column" justifyContent="center" marginLeft={-1}>
        <Text color={Color.primary.black} fontWeight="600" fontSize="14px">
          1.069 likes
        </Text>
        <Stack spacing={0.8} marginTop={0.3}>
          <Text color={Color.primary.black} fontWeight="400" fontSize="14px">
            <Text color={Color.primary.black} fontWeight="600" fontSize="14px">
              terrylucas{" "}
            </Text>
            Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque...more
          </Text>

          <Text color={Color.primary.gray} fontWeight="400" fontSize="14px">
            View all 100 comments
          </Text>
          <Text color={Color.primary.gray} fontWeight="400" fontSize="10px">
            1 HOUR AGO
          </Text>
        </Stack>
      </Stack>
      <AddComment />
    </Stack>
  );
};
