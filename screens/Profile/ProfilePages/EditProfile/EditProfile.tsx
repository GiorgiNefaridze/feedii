import { useState, useEffect, memo } from "react";
import { View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import { INavigation, IForm } from "./Types";
import {
  errorMessage,
  paddingHorizontal,
  successMessage,
} from "../../../../constants";
import { useUpdateProfile } from "../../../../hooks/useUpdateProfile";
import { AuthContext } from "../../../../context/authContext";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";

import {
  EditProfileWrapper,
  EditProfileInputsWrapper,
  EditProfileInput,
} from "./EditProfile.style";

const screenWidth: number = Dimensions.get("screen").width;

const EditProfile = ({ navigation }: INavigation) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [form, setForm] = useState<IForm>({
    firstName: "",
    lastName: "",
    secret: "",
  });

  const { userData, setUserData } = AuthContext();
  const { err, result, setErr, setResult, updateProfile } = useUpdateProfile();

  useEffect(() => {
    const isValid = Object.entries(form).every(
      (field) => field[1]?.length >= 3
    );

    if (isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  useEffect(() => {
    if (Object.keys(result)?.length > 0) {
      setUserData(result);
      Toast.show({
        type: "success",
        text1: successMessage,
        text2: "User updated successfully",
      });

      setResult({});
    }
    if (err.length > 0) {
      Toast.show({ type: "error", text1: errorMessage, text2: err });
      setErr("");
    }
  }, [err, result]);

  const handleBack = () => {
    navigation.goBack();
  };

  const updateUserProfile = () => {
    if (isDisabled) {
      return;
    }

    const { firstName, lastName, secret } = form;
    updateProfile({
      firstName,
      lastName,
      secret,
      user_id: userData?.id,
    });

    setForm({ firstName: "", lastName: "", secret: "" });
  };

  return (
    <EditProfileWrapper width={screenWidth}>
      <View style={{ rowGap: 15 }}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </TouchableOpacity>
        <EditProfileInputsWrapper>
          <EditProfileInput>
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
          </EditProfileInput>
          <EditProfileInput>
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
          </EditProfileInput>
          <EditProfileInput>
            <Header
              color="white"
              size={2}
              text="Enter/Confirm secret:"
              weight="500"
            />
            <Input
              borderColor="grey"
              borderRadius={8}
              handleChange={(e) =>
                setForm((prevForm) => ({ ...prevForm, secret: e }))
              }
              keyboardType="default"
              secure={false}
              text="Secret"
              value={form.secret}
              width={screenWidth - 2 * paddingHorizontal}
              inpPadding={10}
              placeholderTextColor="grey"
            />
          </EditProfileInput>
        </EditProfileInputsWrapper>
      </View>
      <Button
        bgColor={isDisabled ? "#616161" : "#1573FE"}
        borderRadius={8}
        handlePress={updateUserProfile}
        isDisabled={isDisabled}
        width={screenWidth - 2 * paddingHorizontal}
        padding={13}
        textTransform="uppercase"
        color="white"
        text="change"
      />
      <Toast />
    </EditProfileWrapper>
  );
};

export default memo(EditProfile);
