import { View } from "react-native";
import styled from "styled-components";

import { darkBgColor, paddingHorizontal } from "../../../../constants";

import { IProps } from "./Types";

export const EditProfileWrapper = styled(View)<IProps>`
  flex: 1;
  background-color: ${darkBgColor};
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  justify-content: space-between;
  padding-top: 60;
  padding-bottom: 20;
`;

export const EditProfileInput = styled(View)`
  row-gap: 5;
`;

export const EditProfileInputsWrapper = styled(View)`
  row-gap: 15;
`;
