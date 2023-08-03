import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { darkBgColor } from "../../constants";
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
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const isvalid = validInputs(email, password, fName, lName, secret);

    setIsDisabled(isvalid);
  }, [email, password, fName, lName, secret]);

  const handleBack = () => {
    navigation?.navigate(Routes.Login);
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
          />
          <Input
            width={screenWidth / 2 - paddingInline - gap}
            borderColor="#757575"
            borderRadius={10}
            keyboardType="default"
            secure={false}
            text="LastName"
            handleChange={setLName}
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
        />
        <Input
          width={screenWidth - 2 * paddingInline}
          borderColor="#757575"
          borderRadius={10}
          keyboardType="default"
          secure={true}
          text="Password"
          handleChange={setPassword}
        />
        <Input
          width={screenWidth - 2 * paddingInline}
          borderColor="#757575"
          borderRadius={10}
          keyboardType="default"
          secure={false}
          text="Secret"
          handleChange={setSecret}
        />
        <Button
          bgColor={!isDisabled ? "#616161" : "#1573FE"}
          borderColor="#616161"
          borderRadius={10}
          color={!isDisabled ? "white" : "black"}
          text="Sign In"
          width={screenWidth - 2 * paddingInline}
          textTransform="uppercase"
          padding={11}
          handlePress={() => {}}
          isDisabled={isDisabled}
        />
      </View>
      <View style={styles.footer}>
        <Header color="white" size={3} text="Have an account?" weight="400" />
        <TouchableOpacity onPress={handleBack}>
          <Header color="#1573FE" size={3} text="Sign in" weight="400" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
