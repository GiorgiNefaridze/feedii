import { useState, useEffect, memo } from "react";
import { View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { INavigation, IForm } from "./Types";
import { paddingHorizontal } from "../../../../constants";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";

import {
  EditProfileWrapper,
  EditProfileInputsWrapper,
} from "./EditProfile.style";

const screenWidth: number = Dimensions.get("screen").width;

const EditProfile = ({ navigation }: INavigation) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [form, setForm] = useState<IForm>({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      form.firstName.length > 3 &&
      form.lastName.length > 3 &&
      form.password.length > 3
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <EditProfileWrapper width={screenWidth}>
      <View style={{ rowGap: 15 }}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </TouchableOpacity>
        <EditProfileInputsWrapper>
          <View style={{ rowGap: 5 }}>
            <Header
              color="white"
              size={2}
              text="Enter new Firstname:"
              weight="500"
            />
            <Input
              borderColor="grey"
              borderRadius={8}
              handleChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, firstName: e }))
              }
              keyboardType="default"
              secure={false}
              text="New firstname"
              value={form.firstName}
              width={screenWidth - 2 * paddingHorizontal}
              inpPadding={10}
              placeholderTextColor="grey"
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Header
              color="white"
              size={2}
              text="Enter new Lastname:"
              weight="500"
            />
            <Input
              borderColor="grey"
              borderRadius={8}
              handleChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, lastName: e }))
              }
              keyboardType="default"
              secure={false}
              text="New lastname"
              value={form.lastName}
              width={screenWidth - 2 * paddingHorizontal}
              inpPadding={10}
              placeholderTextColor="grey"
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Header
              color="white"
              size={2}
              text="Enter new Password:"
              weight="500"
            />
            <Input
              borderColor="grey"
              borderRadius={8}
              handleChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, password: e }))
              }
              keyboardType="default"
              secure={false}
              text="New password"
              value={form.password}
              width={screenWidth - 2 * paddingHorizontal}
              inpPadding={10}
              placeholderTextColor="grey"
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Header
              color="white"
              size={2}
              text="Confirm new Password:"
              weight="500"
            />
            <Input
              borderColor="grey"
              borderRadius={8}
              handleChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, confirmPassword: e }))
              }
              keyboardType="default"
              secure={false}
              text="New password"
              value={form.confirmPassword}
              width={screenWidth - 2 * paddingHorizontal}
              inpPadding={10}
              placeholderTextColor="grey"
            />
          </View>
        </EditProfileInputsWrapper>
      </View>
      <Button
        bgColor={isDisabled ? "#616161" : "#1573FE"}
        borderRadius={8}
        handlePress={() => {}}
        isDisabled={isDisabled}
        width={screenWidth - 2 * paddingHorizontal}
        padding={13}
        textTransform="uppercase"
        color="white"
        text="change"
      />
    </EditProfileWrapper>
  );
};

export default memo(EditProfile);
