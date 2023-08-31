import { View, Text } from "react-native";

import { AuthContext } from "../../context/authContext";

const Profile = (): JSX.Element => {
  const {
    userData: { firstname },
  } = AuthContext();

  return (
    <View>
      <Text>Hello {firstname}</Text>
    </View>
  );
};

export default Profile;
