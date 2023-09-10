import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

import {
  feedBgColor,
  feedBlockBgColor,
  paddingHorizontal,
} from "../../../../constants";

interface IProps {
  width: number;
}

export const SavePostsWrapper = styled(View)`
  flex: 1;
  background-color: ${feedBgColor};
  padding-top: 60;
  align-items: flex-start;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  row-gap: 25;
`;

export const HiddenItemsWrapper = styled(View)<IProps>`
  width: ${({ width }) => width};
  align-self: flex-end;
  flex-direction: row;
  height: 80;
`;

export const HiddenItem = styled(TouchableOpacity)<IProps>`
  width: ${({ width }) => width};
  height: 80;
  justify-content: center;
  align-items: center;
`;

export const PostWrapper = styled(View)<IProps>`
  width: ${({ width }) => width - 2 * paddingHorizontal};
  height: 80;
  background-color: ${feedBlockBgColor};
  margin-bottom: 10;
  justify-content: "space-between";
`;
