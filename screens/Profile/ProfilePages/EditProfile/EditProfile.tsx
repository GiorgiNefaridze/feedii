import { View, Text } from "react-native";
import React from "react";

import { INavigation } from "./Types";

import { EditProfileWrapper } from "./EditProfile.style";

const EditProfile = ({ navigation }: INavigation) => {
  return (
    <EditProfileWrapper>
      <Text>EditProfile</Text>
    </EditProfileWrapper>
  );
};

export default EditProfile;
