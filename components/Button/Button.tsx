import { Text } from "react-native";

import { IButton } from "./Types";

import { ButtonWrapper } from "./Button.style";

const Buttonn = (props: IButton) => {
  const { text, handlePress, ...rest } = props;

  return (
    <ButtonWrapper onPress={handlePress} {...rest}>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

export default Buttonn;
