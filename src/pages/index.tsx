import { Body } from "@/components/common/body";
import { Header } from "@/components/common/header";
import { Stack } from "@mui/material";

const Home = () => {
  return (
      <Stack alignItems="center" direction="column">
        <Header />
        <Body />
      </Stack>
  );
};

export default Home;
