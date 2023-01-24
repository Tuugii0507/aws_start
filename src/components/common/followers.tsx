import { Stack } from "@mui/system";
import { SwitchProfile } from "../core/switch_profile";
import { Text } from "../core/text";
import { Color } from "@/theme/color";
import { Follower } from "../core/follower";

export const Followers = () => {
  return (
    <Stack
      width="293px"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <SwitchProfile />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="293px"
        marginTop={3}
        marginBottom={1}
      >
        <Text fontSize="14px" fontWeight="500" color={Color.primary.gray}>
          Suggestions For You
        </Text>
        <Text fontSize="12px" fontWeight="600" color={Color.primary.black} cursor="pointer">
          See All
        </Text>
      </Stack>
      <Follower />
      <Text fontSize="11px" fontWeight="400" color={Color.secondary.gray}>
        About · Press · API · Jobs · Privacy · Terms · Locations · Top Accounts
        · Hashtags · Language ·
      </Text>
    </Stack>
  );
};
