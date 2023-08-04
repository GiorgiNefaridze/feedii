import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import { useRegister } from "../../hooks/useRegister";
import { isValidInputs } from "../../server/utils/isValidInputs";
import { darkBgColor, successMessage, errorMessage } from "../../constants";
import { validInputs } from "../../utils/validInputs";
import { paddingInline } from "../Login/Login";
import { Routes } from "../../navigation/Routes";
import { IProps } from "../Login/Login";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import styles from "../Login/Login.style";

const screenWidth: number = Dimensions.get("screen").width;
const gap = 5;

const SignUp = ({ navigation }: IProps): JSX.Element => {
  const [firstName, setFName] = useState<string>("");
  const [lastName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const { register, err, result, setErr, setResult } = useRegister();

  useEffect(() => {
    const isvalid = validInputs(email, password, firstName, lastName, secret);

    setIsDisabled(isvalid);
  }, [email, password, firstName, lastName, secret]);

  useEffect(() => {
    if (result?.length) {
      Toast.show({ type: "success", text1: successMessage, text2: result });
      setResult("");
    }

    if (err?.length) {
      Toast.show({ type: "error", text1: errorMessage, text2: err });
      setErr("");
    }
  }, [result, err]);

  const handleBack = () => {
    navigation?.navigate(Routes.Login);
  };

  const handleRegister = async () => {
    const isValid = isValidInputs([
      firstName,
      lastName,
      email,
      password,
      secret,
    ]);

    if (isValid) {
      await register({ email, firstName, lastName, secret, password });
    }
  };

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
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputs}>
        <Header
          color="white"
          size={1}
          text="Let's Sign up and create your world🚀"
          weight="bold"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Input
            width={screenWidth / 2 - paddingInline - gap}
            borderColor="#757575"
            borderRadius={10}
            keyboardType="default"
            secure={false}
            text="FirstName"
            handleChange={setFName}
            value={firstName}
          />
          <Input
            width={screenWidth / 2 - paddingInline - gap}
            borderColor="#757575"
            borderRadius={10}
            keyboardType="default"
            secure={false}
            text="LastName"
            handleChange={setLName}
            value={lastName}
          />
        </View>
        <Input
          width={screenWidth - 2 * paddingInline}
          borderColor="#757575"
          borderRadius={10}
          keyboardType="email-address"
          secure={false}
          text="Email"
          handleChange={setEmail}
          value={email}
        />
        <Input
          width={screenWidth - 2 * paddingInline}
          borderColor="#757575"
          borderRadius={10}
          keyboardType="default"
          secure={true}
          text="Password"
          handleChange={setPassword}
          value={password}
        />
        <Input
          width={screenWidth - 2 * paddingInline}
          borderColor="#757575"
          borderRadius={10}
          keyboardType="default"
          secure={false}
          text="Secret"
          handleChange={setSecret}
          value={secret}
        />
        <Button
          bgColor={!isDisabled ? "#616161" : "#1573FE"}
          borderColor="#616161"
          borderRadius={10}
          color={!isDisabled ? "white" : "black"}
          text="Sign Up"
          width={screenWidth - 2 * paddingInline}
          textTransform="uppercase"
          padding={11}
          handlePress={handleRegister}
          isDisabled={isDisabled}
        />
      </View>
      <View style={styles.footer}>
        <Header color="white" size={3} text="Have an account?" weight="400" />
        <TouchableOpacity onPress={handleBack}>
          <Header color="#1573FE" size={3} text="Sign up" weight="400" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
