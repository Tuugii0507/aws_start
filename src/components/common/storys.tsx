import React from "react";
import Stack from "@mui/material/Stack";
import { Color } from "@/theme/color";
import { Story } from "../core/story";
import { RightButton } from "../core/right_button";

export const Storys = () => {
  const stories = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  return (
    <Stack
      direction="row"
      alignItems="center"
      width="614px"
      height="118px"
      border="1px solid"
      borderColor={Color.secondary.black}
      overflow="hidden"
    >
      {stories.map((el, index) => {
        return <Story key={index} el={index} />;
      })}
      {/* <LeftButton left={2}/> */}
      <RightButton left={72}/>
    </Stack>
  );
};
