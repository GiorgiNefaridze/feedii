import { View, Dimensions } from "react-native";
import {
  faNewspaper,
  faFloppyDisk,
  faPalette,
  faEarthAmerica,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../context/authContext";
import { profileOptions } from "../../constants";
import { INavigation } from "./ProfilePages/EditProfile/Types";
import { Routes } from "../../navigation/Routes";
import Header from "../../components/Header/Header";
import Option from "./Option";

import {
  ProfileWrapper,
  Avatar,
  ProfileOptionsWrapper,
  ProfileOptionBlock,
} from "./Profile.style";

const screenWidth: number = Dimensions.get("screen").width;

const Profile = ({ navigation }: INavigation): JSX.Element => {
  const {
    userData: { firstname, lastname },
  } = AuthContext();

  const fullName = firstname + " " + lastname;

  const handleNavigation = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <ProfileWrapper>
      <View style={{ alignItems: "center", rowGap: 15 }}>
        <Avatar>
          <Header
            color="white"
            size={2}
            text={firstname?.slice(0, 1)}
            weight="400"
          />
        </Avatar>
        <Header color="white" size={1} text={fullName} />
      </View>
      <ProfileOptionsWrapper>
        <ProfileOptionBlock width={screenWidth}>
          <Option
            handleClick={() => handleNavigation(Routes.editProfile)}
            content={profileOptions.editProfileInformation}
            icon={faNewspaper}
          />
          <Option
            handleClick={() => handleNavigation(Routes.savePosts)}
            content={profileOptions.savePosts}
            icon={faFloppyDisk}
          />
          <Option content={profileOptions.delete} icon={faTrash} />
        </ProfileOptionBlock>
        <ProfileOptionBlock width={screenWidth}>
          <Option content={profileOptions.theme} icon={faPalette} />
          <Option content={profileOptions.languages} icon={faEarthAmerica} />
        </ProfileOptionBlock>
      </ProfileOptionsWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
