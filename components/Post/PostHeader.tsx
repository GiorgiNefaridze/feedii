import { View } from "react-native";

import { tabBarIconActiveColor } from "../../constants";
import { IPostHeader } from "./Types";
import Text from "../Header/Header";
import Button from "../Button/Button";

import { Header, User } from "./Post.style";

const paddingHorizontal: number = 20;

const PostHeader = ({ date, fullName }: IPostHeader): JSX.Element => {
  const releaseDate = date?.slice(0, 10);

  return (
    <Header paddingHorizontal={paddingHorizontal}>
      <User>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            color="white"
            size={2}
            text={fullName?.slice(0, 1)}
            weight="400"
          />
        </View>
        <View>
          <Text
            color="white"
            size={2}
            text={fullName}
            weight="600"
            lineHeight={20}
          />
          <Text
            color="#beccd9"
            size={4}
            text={releaseDate}
            weight="400"
            lineHeight={20}
          />
        </View>
      </User>
    </Header>
  );
};

export default PostHeader;
