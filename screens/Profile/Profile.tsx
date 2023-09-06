import { View, Dimensions, ActivityIndicator } from "react-native";
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
import Option from "./Option/Option";

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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Option content={profileOptions.theme} icon={faPalette} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 5,
              }}
            >
              <Header color="grey" size={4} text="Under development..." />
              <ActivityIndicator size={17} color={"grey"} />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Option content={profileOptions.languages} icon={faEarthAmerica} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 5,
              }}
            >
              <Header color="grey" size={4} text="Under development..." />
              <ActivityIndicator size={17} color={"grey"} />
            </View>
          </View>
        </ProfileOptionBlock>
      </ProfileOptionsWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
