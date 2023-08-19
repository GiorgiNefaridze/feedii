import { ScrollView, View } from "react-native";
import styled from "styled-components";

import { feedBgColor } from "../../constants";

export const PostWrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${feedBgColor};
  padding-right: 25;
  padding-left: 25;
  padding-top: 40;
  row-gap: 30;
`;

export const PostFooter = styled(View)`
  height: 70;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  padding-left: 25;
  padding-right: 25;
`;
