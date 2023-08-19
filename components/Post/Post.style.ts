import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import { feedBlockBgColor } from "../../constants";

import { IWrapper, IHeader, IFooter } from "./Types";

export const PostWrapper = styled(View)<IWrapper>`
  width: ${({ width }) => width};
  margin-top: 10;
  margin-bottom: 10;
  align-items: center;
  background-color: ${feedBlockBgColor};
  row-gap: 12;
  padding-top: 20;
  padding-bottom: 5;
`;

export const Header = styled(View)<IHeader>`
  width: 100%;
  padding-inline: ${({ paddingHorizontal }) => paddingHorizontal};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled(View)`
  flex-direction: row;
  align-items: center;
  column-gap: 10;
`;

export const Footer = styled(View)<IFooter>`
  width: ${({ width }) => width};
  padding-inline: ${({ paddingHorizontal }) => paddingHorizontal};
  row-gap: 5;
`;

export const FooterStats = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Stats = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  column-gap: 5;
`;

export const FooterComment = styled(TouchableOpacity)<{ width: number }>`
  width: ${({ width }) => width};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
