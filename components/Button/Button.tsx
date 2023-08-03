import { Text } from "react-native";

import { IButton } from "./Types";

import { ButtonWrapper } from "./Button.style";

const Button = (props: IButton) => {
  const { text, handlePress, color, textTransform, isDisabled, ...rest } =
    props;

  return (
    <ButtonWrapper onPress={handlePress} isDisabled={isDisabled} {...rest}>
      <Text style={{ color, textTransform: textTransform, fontWeight: "600" }}>
        {text}
      </Text>
    </ButtonWrapper>
  );
};

export default Button;
