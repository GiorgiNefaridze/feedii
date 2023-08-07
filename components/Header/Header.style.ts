import { Text } from "react-native";
import styled from "styled-components";

import { IProps } from "./Types";
import { calculateFontSize } from "../../utils/calculateFontSize";

export const Heading = styled(Text)<IProps>`
  font-size: ${({ size }) => calculateFontSize(size)};
  color: ${({ color }) => color ?? "white"};
  font-weight: ${({ weight }) => weight ?? "normal"};
  line-height: ${({ lineHeight }) => lineHeight ?? 35};
`;
