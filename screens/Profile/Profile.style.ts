import { View } from "react-native";
import styled from "styled-components";

import { IProps } from "./Types";

import {
  feedBgColor,
  feedBlockBgColor,
  paddingHorizontal,
} from "../../constants";

export const Avatar = styled(View)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled(View)`
  flex: 1;
  background-color: ${feedBgColor};
  justify-content: center;
  align-items: center;
  row-gap: 40;
`;

export const ProfileOptionsWrapper = styled(View)`
  row-gap: 20;
`;

export const ProfileOptionBlock = styled(View)<{ width: number }>`
  width: ${({ width }) => width - 2 * paddingHorizontal};
  padding-top: 13;
  padding-bottom: 13;
  padding-left: 13;
  padding-right: 13;
  background-color: ${feedBlockBgColor};
  border-radius: 8px;
`;
