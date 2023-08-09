import { View, Platform } from "react-native";
import styled from "styled-components";

import { feedBlockBgColor } from "../../constants";

export const FeedHeaderWrapper = styled(View)`
  padding-top: ${() => (Platform.OS == "android" ? 40 : 20)};
  padding-bottom: 10;
  flex-direction: row;
  justify-content: center;
  background-color: ${feedBlockBgColor};
`;
