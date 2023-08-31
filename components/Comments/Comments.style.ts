import { View, ScrollView } from "react-native";
import styled from "styled-components";

import { IProps } from "./Types";

export const CommentComponent = styled(View)<IProps>`
  width: ${({ width }) => width};
  row-gap: 15;
  padding-bottom: 80;
`;

export const Comment = styled(View)<IProps>`
  width: ${({ width }) => width};
  padding-top: 10;
  padding-bottom: 10;
`;
