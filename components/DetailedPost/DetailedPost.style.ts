import { ScrollView, View } from "react-native";
import styled from "styled-components";

import { feedBgColor, darkBgColor } from "../../constants";

interface Iprops {
  width: number;
}

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
  background-color: #29292b;
  padding-left: 25;
  padding-right: 25;
`;

export const CommentBox = styled(View)<Iprops>`
  width: ${({ width }) => width + "px"};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${darkBgColor};
  align-items: center;
  border-radius: 10px;
  padding-right: 15px;
`;
