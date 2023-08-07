import { View } from "react-native";
import styled from "styled-components";

import { IWrapper, IHeader } from "./Types";

export const PostWarpper = styled(View)<IWrapper>`
  width: ${({ width }) => width};
  height: 450;
  align-items: center;
  background-color: white;
  row-gap: 12;
  padding-top: 15;
  padding-bottom: 15;
  margin-top: 50;
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
