import { View } from "react-native";
import styled from "styled-components";

export const ProfileOption = styled(View)<{ touched: boolean }>`
  width: "100%";
  flex-direction: row;
  align-items: center;
  column-gap: 15;
  padding-top: 8;
  padding-bottom: 8;
  background-color: ${({ touched }) =>
    touched ? "rgba(0,0,0,0.1)" : "transparent"};
  transition: All 1s ease;
`;
