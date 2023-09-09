import { Dimensions, Image, View } from "react-native";

import { IPost } from "./Types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import Header from "../Header/Header";

import { PostWrapper } from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width;

const Post = ({
  post_id,
  firstname,
  lastname,
  cover,
  date,
  content,
  comment,
  likes,
  navigationProp,
}: IPost): JSX.Element => {
  const fullName = firstname + " " + lastname;

  return (
    <PostWrapper width={screenWidth}>
      <PostHeader date={date} fullName={fullName} />
      <View style={{ paddingHorizontal: 15 }}>
        <Header
          color="white"
          size={4}
          text={content}
          weight="400"
          lineHeight={18}
        />
      </View>
      {cover?.length >= 1 && (
        <Image
          source={{ uri: cover }}
          style={{ flex: 1, width: screenWidth, height: 360 }}
          resizeMode="stretch"
        />
      )}
      <PostFooter
        comments={comment}
        likes={likes}
        post_id={post_id}
        navigation={navigationProp}
      />
    </PostWrapper>
  );
};

export default Post;
