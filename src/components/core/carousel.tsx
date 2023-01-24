import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const Carousel = ({ photos }: any) => {
  const [sequence, setSequence] = useState(0);
  //   if (sequence > photos.length) {
  //     setSequence(0);
  //   }
  console.log(sequence);
  return (
    <Stack>
      <Image width={614} height={614} src={photos[sequence]} alt={""} />
      <Stack
        borderRadius={22}
        border="1px solid #ffffff"
        bgcolor="#ffffff"
        justifyContent="center"
        alignItems="center"
        width={22}
        height={22}
        position="absolute"
        marginLeft={70}
        marginTop={34}
      >
        <Button onClick={() => setSequence(sequence + 1)}>
          <ChevronRightIcon color="inherit"    />
        </Button>
      </Stack>
    </Stack>
  );
};
