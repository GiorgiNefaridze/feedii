import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import { useAuth } from "../../hooks/useAuth";
import { darkBgColor, errorMessage, successMessage } from "../../constants";
import { IProps } from "../Login/Login";
import { Routes } from "../../navigation/Routes";
import { isValidInputs } from "../../server/utils/isValidInputs";
import ResetInputs from "./ResetInputs";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

import styles from "../Login/Login.style";

export const paddingInline = 25;
const screenWidth: number = Dimensions.get("screen").width,
  endpoint: string = "/api/auth/reset-password";

///Step 1: App conditon when you have to enter mail in order to continue
///Step 2: You have to remember your secret key, enter new Password submit then

const ResetPassword = ({ navigation }: IProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [secret, setScret] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const { auth, err, result, setErr, setResult } = useAuth(endpoint);

  useEffect(() => {
    setStep(1);
  }, []);

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
    if (step === 1) {
      navigation?.navigate(Routes.Login);
    } else {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    (async () => {
      const isValid: boolean = isValidInputs([email, password, secret]);

      if (step === 2 && isValid) {
        await auth({ email, secret, password });
      }
    })();
  }, [step, toggle]);

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
        <TouchableOpacity onPress={handleBack}>
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
          <ResetInputs
            step={step}
            setStep={setStep}
            value={email}
            setValue={setEmail}
            label="Email"
            setToggle={setToggle}
          />
        )}
        {step === 2 && (
          <ResetInputs
            step={step}
            setStep={setStep}
            value={secret}
            setValue={setScret}
            label="Secret"
            setToggle={setToggle}
          >
            <Input
              width={screenWidth - 2 * paddingInline}
              borderColor="#757575"
              borderRadius={10}
              keyboardType="default"
              secure={false}
              text={"New Password"}
              value={password}
              handleChange={setPassword}
            />
          </ResetInputs>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
