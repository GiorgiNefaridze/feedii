import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import { IProps } from "./Types";

//I had a problem to just set border-radius at once for every direction, still have no idea why
export const ButtonWrapper = styled(TouchableOpacity)<IProps>`
  width: ${({ width }) => width};
  background-color: ${({ bgColor }) => bgColor ?? "white"};
  border-top-right-radius: ${({ borderRadius }) => borderRadius};
  border-top-left-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius};
  border-color: ${({ borderColor }) => borderColor ?? "white"};
  padding-top: ${({ padding }) => padding};
  padding-bottom: ${({ padding }) => padding};
  align-items: center;
  justify-content: center;
`;
