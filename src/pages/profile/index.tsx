import { Header } from "@/components/common/header";
import { InformationCard } from "@/components/core/information_card";
import { Switch_Type } from "@/components/core/switch_type";
import { Stack } from "@mui/system";

const Profile = () => {
    return (
        <Stack direction="column" alignItems="center" justifyContent="center">
            <Header/>
            <InformationCard/>
            <Switch_Type/>
        </Stack>
    )
}

export default Profile;