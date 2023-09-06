import { View } from "react-native";

import { IPostHeader } from "./Types";
import Text from "../Header/Header";

import { Header, User, UserInfo } from "./Post.style";

const paddingHorizontal: number = 20;

const PostHeader = ({ date, fullName }: IPostHeader): JSX.Element => {
  const releaseDate = date?.slice(0, 10);

  return (
    <Header paddingHorizontal={paddingHorizontal}>
      <User>
        <UserInfo>
          <Text
            color="white"
            size={2}
            text={fullName?.slice(0, 1)}
            weight="400"
          />
        </UserInfo>
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
