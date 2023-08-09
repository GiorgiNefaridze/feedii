import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { feedBgColor } from "../../constants";

export const Container = styled(View)<{ paddingHorizontal: number }>`
  flex: 1;
  background-color: ${feedBgColor};
  padding-left: ${({ paddingHorizontal }) => paddingHorizontal};
  padding-right: ${({ paddingHorizontal }) => paddingHorizontal};
  row-gap: 30;
  padding-top: 50;
`;

export const ImageUploader = styled(TouchableOpacity)<{
  paddingHorizontal: number;
  width: number;
}>`
  width: ${({ width, paddingHorizontal }) => width - 2 * paddingHorizontal};
  height: 200;
  background-color: grey;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  justify-content: center;
  align-items: center;
`;
