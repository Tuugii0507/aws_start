import Image from "next/image";
import logo from "../../assets/image/logo.png";
import { IconButton, Input, InputBase, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import homeIcon from "../../assets/icon/homeIcon.svg";
import messengerIcon from "../../assets/icon/messengerIcon.svg";
import plusIcon from "../../assets/icon/plusIcon.svg";
import findIcon from "../../assets/icon/findIcon.svg";
import hearthIcon from "../../assets/icon/hearthIcon.svg";
import randomPhoto from "../../assets/image/random_photo.png";

export const Header = () => {
  return (
    <Grid
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid #DBDBDB"
    >
      <Stack
        direction="row"
        width="80vw"
        height="53px"
        justifyContent="center"
        alignItems="center"
        spacing={30}
      >
        <Image src={logo} width={103} height={29} alt={""} />
        <Input
          disabled={false}
          placeholder="Search"
          startAdornment={<SearchIcon />}
        />
        <Stack direction="row" spacing={3}>
          <Image src={homeIcon} alt={""} />
          <Image src={messengerIcon} alt={""} />
          <Image src={plusIcon} alt={""} />
          <Image src={findIcon} alt={""} />
          <Image src={hearthIcon} alt={""} />
          <Stack
            borderRadius={56}
            width="22px"
            height="22px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Image width={22} height={22} src={randomPhoto} alt={""} />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
