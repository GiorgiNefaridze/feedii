import { View, Text } from "react-native";

import Header from "../Header/Header";

import { FeedHeaderWrapper } from "./FeedHeader.style";

const FeedHeader = (): JSX.Element => {
  return (
    <FeedHeaderWrapper>
      <Header color="white" size={1} text="Feed" weight="700" />
    </FeedHeaderWrapper>
  );
};

export default FeedHeader;
