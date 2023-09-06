import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import { feedBlockBgColor } from "../../constants";

import { IProps, IFooter } from "./Types";

export const PostWrapper = styled(View)<IProps>`
  width: ${({ width }) => width};
  margin-top: 10;
  margin-bottom: 10;
  align-items: flex-start;
  background-color: ${feedBlockBgColor};
  row-gap: 12;
  padding-top: 20;
  padding-bottom: 15;
`;

export const Header = styled(View)<IProps>`
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

export const UserInfo = styled(View)`
  width: 40;
  height: 40;
  border-radius: 50px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled(View)<IFooter>`
  width: ${({ width }) => width};
  align-self: center;
  padding-inline: ${({ paddingHorizontal }) => paddingHorizontal};
  row-gap: 5;
`;

export const FooterStats = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterStatsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  column-gap: 12;
`;

export const StatisticBlock = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  column-gap: 5;
`;
