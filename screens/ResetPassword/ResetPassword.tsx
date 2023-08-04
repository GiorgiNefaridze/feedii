import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import { darkBgColor, errorMessage } from "../../constants";
import { Routes } from "../../navigation/Routes";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import styles from "../Login/Login.style";

export const paddingInline = 25;
const screenWidth: number = Dimensions.get("screen").width;

export interface IProps {
  navigation: unknown;
}
///Step 1: App conditon when you have to enter mail in order to continue
///Step 2: You have to remember yout secret key and submit then

const ResetPassword = ({ navigation }: IProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [secret, setScret] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handlePress = () => {
    if (step === 1 && !isDisabled) {
      setStep(step + 1);
    }

    if (step === 2 && !isDisabled) {
      ///API Call => Reset pwd
    }
  };

  useEffect(() => {
    if (email?.length > 5 && email?.includes("@")) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingHorizontal: paddingInline,
          backgroundColor: darkBgColor,
        },
      ]}
    >
      <Toast />
      <View
        style={[
          styles.header,
          {
            position: "absolute",
            top: 40,
            left: paddingInline,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation?.navigate(Routes.Login)}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ rowGap: 30 }}>
        <Header
          color="white"
          size={1}
          text="Reset Password with Secret key"
          weight="bold"
        />
        {step === 1 && (
          <Input
            width={screenWidth - 2 * paddingInline}
            borderColor="#757575"
            borderRadius={10}
            keyboardType="email-address"
            secure={false}
            text="Email"
            value={email}
            handleChange={setEmail}
          />
        )}

        {step === 2 && (
          <Input
            width={screenWidth - 2 * paddingInline}
            borderColor="#757575"
            borderRadius={10}
            keyboardType="default"
            secure={true}
            text="Secret"
            value={secret}
            handleChange={setScret}
          />
        )}
        <Button
          bgColor={isDisabled ? "#616161" : "#1573FE"}
          borderColor="#616161"
          borderRadius={10}
          color={isDisabled ? "white" : "black"}
          text={step === 1 ? "Next" : "Submit"}
          width={screenWidth - 2 * paddingInline}
          textTransform="uppercase"
          padding={11}
          handlePress={handlePress}
          isDisabled={isDisabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
