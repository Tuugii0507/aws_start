import Stack from "@mui/material/Stack";
import { Followers } from "./followers";
import { Posts } from "./posts";
import { Storys } from "./storys";

export const Body = () => {
  return (
    
      <Stack direction="row" justifyContent="center" alignItems="flex-start" marginTop={3}>
        <Stack direction="column" alignItems="center" justifyContent="center" marginRight={3}>
          <Storys />
          <Posts />
        </Stack>
        <Followers />
      </Stack>
  );
};
