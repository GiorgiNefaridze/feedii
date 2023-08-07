import { View, Image } from "react-native";

import { tabBarIconActiveColor } from "../../constants";
import Text from "../Header/Header";
import Button from "../Button/Button";

import { Header, User } from "./Post.style";

interface IProps {
  userImage: string;
  fullName: string;
  date: Date;
  paddingHorizontal: number;
}

const PostHeader = ({
  date,
  fullName,
  userImage,
  paddingHorizontal,
}: IProps): JSX.Element => {
  return (
    <Header paddingHorizontal={paddingHorizontal}>
      <User>
        <Image
          source={{ uri: userImage }}
          style={{ width: 45, height: 45, borderRadius: 50 }}
        />
        <View>
          <Text
            color="#0f1419"
            size={2}
            text={fullName}
            weight="600"
            lineHeight={30}
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
        borderRadius={8}
        handlePress={() => {}}
        padding={10}
        width={70}
        textTransform="uppercase"
        isDisabled={false}
      />
    </Header>
  );
};

export default PostHeader;
