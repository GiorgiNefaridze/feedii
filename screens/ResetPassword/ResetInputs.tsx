import { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";

import { isValidInputs } from "../../server/utils/isValidInputs";
import { IPros } from "./Types";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export const paddingInline = 25;
const screenWidth: number = Dimensions.get("screen").width,
  steps = {
    1: "Next",
    2: "Submit",
  };

const ResetInputs = ({
  value,
  setValue,
  step,
  setStep,
  label,
  children,
  setToggle,
}: IPros): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handlePress = async () => {
    if (!isDisabled && step !== 2) {
      setStep(step + 1);
    }
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    const isValid: boolean = isValidInputs([value]);

    if (isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value]);

  return (
    <View style={{ rowGap: 20 }}>
      {children}
      <Input
        width={screenWidth - 2 * paddingInline}
        borderColor="#757575"
        borderRadius={10}
        keyboardType="email-address"
        secure={false}
        text={label}
        value={value}
        handleChange={setValue}
      />
      <Button
        bgColor={isDisabled ? "#616161" : "#1573FE"}
        borderColor="#616161"
        borderRadius={10}
        color={isDisabled ? "white" : "black"}
        text={steps[step]}
        width={screenWidth - 2 * paddingInline}
        textTransform="uppercase"
        padding={11}
        handlePress={handlePress}
        isDisabled={isDisabled}
      />
    </View>
  );
};

export default ResetInputs;
