import Stack from "@mui/material/Stack";
import { Post } from "../core/post";

export const Posts = () => {
  return (
    <Stack
      width="614px"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Post />
    </Stack>
  );
};
