import { Stack } from "@mui/system";
import posts from "../../assets/icon/posts.svg";
import guides from "../../assets/icon/guides.svg";
import reels from "../../assets/icon/reels.svg";
import videos from "../../assets/icon/videos.svg";
import tagged from "../../assets/icon/tagged.svg";
import { Text } from "./text";
import Image from "next/image";
import { Color } from "@/theme/color";
import { useState } from "react";
import { Button } from "@mui/material";

export const Switch_Type = () => {
  const [too, setToo] = useState(0);
  const types = [
    { name: "POSTS", src: posts },
    { name: "GUIDES", src: guides },
    { name: "REELS", src: reels },
    { name: "VIDEOS", src: videos },
    { name: "TAGGED", src: tagged },
  ];
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={10}
    >
      {types.map((element: any, index: number) => {
        return (
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button>
            <Image src={element.src} alt={""} />
            <Text fontSize="12px" fontWeight="600" color={Color.primary.gray}>
              {element.name}
            </Text>
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};
