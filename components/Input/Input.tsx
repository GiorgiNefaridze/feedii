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
    value,
    handleChange,
    placeholderTextColor,
    inpPadding,
  } = props;

  const styles = StyleSheet.create({
    input: {
      width,
      borderRadius,
      borderColor,
      borderWidth: 1,
      backgroundColor: bgColor ?? "tranparent",
      paddingVertical: 10,
      paddingLeft: inpPadding ?? 15,
      color: "white",
    },
  });

  return (
    <TextInput
      placeholder={text}
      placeholderTextColor={placeholderTextColor ?? "white"}
      secureTextEntry={secure}
      keyboardType={keyboardType}
      cursorColor={borderColor}
      value={value}
      onChangeText={handleChange}
      style={styles.input}
    />
  );
};

export default Input;
