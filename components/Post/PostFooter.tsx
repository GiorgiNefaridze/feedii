import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import Header from "../Header/Header";
import Input from "../Input/Input";

import { Footer, FooterStats, Stats, FooterComment } from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width,
  paddingHorizontal: number = 10,
  gapBtwInpAndAvatar: number = 0;

interface IProps {
  likes: number;
  comments: number;
  postDescription: string;
  userImg: string;
}

const PostFooter = ({
  comments,
  likes,
  postDescription,
  userImg,
}: IProps): JSX.Element => {
  return (
    <Footer paddingHorizontal={0} width={screenWidth - 2 * paddingHorizontal}>
      <FooterStats>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 12,
          }}
        >
          <Stats>
            <FontAwesomeIcon icon={faHeart} />
            <Text>{likes}</Text>
          </Stats>
          <Stats>
            <FontAwesomeIcon icon={faComment} />
            <Text>{comments}</Text>
          </Stats>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBookmark} />
        </TouchableOpacity>
      </FooterStats>
      <Header
        color="black"
        size={4}
        text={postDescription}
        weight="400"
        lineHeight={18}
      />
      <FooterComment width={screenWidth - 2 * paddingHorizontal}>
        <Image
          source={{ uri: userImg }}
          style={{ width: 30, height: 30, borderRadius: 50 }}
        />
        <Input
          width={screenWidth - 2 * paddingHorizontal - 30 - gapBtwInpAndAvatar}
          borderRadius={0}
          placeholderTextColor="grey"
          borderColor="transparent"
          handleChange={() => {}}
          keyboardType="default"
          secure={false}
          text="Add comment..."
          value=""
        />
      </FooterComment>
    </Footer>
  );
};

export default PostFooter;
