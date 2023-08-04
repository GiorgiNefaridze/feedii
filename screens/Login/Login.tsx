import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import CheckBox from "react-native-check-box";
import Toast from "react-native-toast-message";

import { useAuth } from "../../hooks/useAuth";
import { darkBgColor, errorMessage } from "../../constants";
import { isValidInputs } from "../../server/utils/isValidInputs";
import { Routes } from "../../navigation/Routes";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import styles from "./Login.style";

export const paddingInline = 25;
const screenWidth: number = Dimensions.get("screen").width,
  endpoint: string = "/api/auth/login";

export interface IProps {
  navigation: unknown;
}

const Login = ({ navigation }: IProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const { auth, err, result, setErr } = useAuth(endpoint);

  useEffect(() => {
    const isvalid: boolean = isValidInputs([email, password]);

    setIsDisabled(isvalid);
  }, [email, password]);

  useEffect(() => {
    if (result?.length) {
      navigation?.navigate?.(Routes.Home);
    }

    if (err?.length) {
      Toast.show({ type: "error", text1: errorMessage, text2: err });
      setErr("");
    }
  }, [result, err]);

  const handleLogin = async () => {
    const isValid: boolean = isValidInputs([email, password]);

    if (isValid && email?.includes("@")) {
      await auth({ email, password });
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
      <View style={styles.inputs}>
        <Header
          color="white"
          size={1}
          text="Sign in with password"
          weight="bold"
        />
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
        <View style={styles.remember}>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked((prev) => !prev)}
            rightText="Remember me"
            rightTextStyle={{ color: "white" }}
            style={styles.checkBox}
          />
          <TouchableOpacity>
            <Header
              color="#1573FE"
              size={3}
              text="Reset password"
              weight="400"
            />
          </TouchableOpacity>
        </View>
        <Button
          bgColor={!isDisabled ? "#616161" : "#1573FE"}
          borderColor="#616161"
          borderRadius={10}
          color={!isDisabled ? "white" : "black"}
          text="Sign In"
          width={screenWidth - 2 * paddingInline}
          textTransform="uppercase"
          padding={11}
          handlePress={handleLogin}
          isDisabled={isDisabled}
        />
      </View>
      <View style={styles.footer}>
        <Header
          color="white"
          size={3}
          text="Don't have an account?"
          weight="400"
        />
        <TouchableOpacity onPress={() => navigation?.navigate(Routes.SignUp)}>
          <Header color="#1573FE" size={3} text="Sign up" weight="400" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
