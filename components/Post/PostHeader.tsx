import { View, Image } from "react-native";

import { tabBarIconActiveColor } from "../../constants";
import Text from "../Header/Header";
import Button from "../Button/Button";

import { Header, User } from "./Post.style";

interface IProps {
  postOwnerImage: string;
  fullName: string;
  date: Date;
}

const paddingHorizontal: number = 20;

const PostHeader = ({
  date,
  fullName,
  postOwnerImage,
}: IProps): JSX.Element => {
  return (
    <Header paddingHorizontal={paddingHorizontal}>
      <User>
        <Image
          source={{ uri: postOwnerImage }}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <View>
          <Text
            color="#0f1419"
            size={2}
            text={fullName}
            weight="600"
            lineHeight={20}
          />
          <Text
            color="#768797"
            size={3}
            text={date.toISOString().slice(0, 10).toString()}
            weight="400"
            lineHeight={20}
          />
        </View>
      </User>
      <Button
        text="Follow"
        color="white"
        bgColor={tabBarIconActiveColor}
        borderColor={tabBarIconActiveColor}
        borderRadius={10}
        handlePress={() => {}}
        padding={8}
        width={70}
        textTransform="uppercase"
        isDisabled={false}
      />
    </Header>
  );
};

export default PostHeader;
