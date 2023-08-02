import { StyleSheet, TextInput } from "react-native";

import { IProps } from "./Types";

const Input = (props: IProps) => {
  const {
    text,
    borderRadius,
    borderColor,
    keyboardType,
    secure,
    width,
    bgColor,
  } = props;

  const styles = StyleSheet.create({
    input: {
      width,
      borderRadius,
      borderColor,
      borderWidth: 1,
      backgroundColor: bgColor ?? "tranparent",
      paddingVertical: 10,
      paddingLeft: 15,
    },
  });

  return (
    <TextInput
      placeholder={text}
      placeholderTextColor={borderColor}
      secureTextEntry={secure}
      keyboardType={keyboardType}
      style={styles.input}
    />
  );
};

export default Input;
