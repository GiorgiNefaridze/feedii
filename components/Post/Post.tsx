import { Dimensions, Image, View } from "react-native";

import { IPost } from "./Types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import { PostWrapper } from "./Post.style";
import Header from "../Header/Header";

const screenWidth: number = Dimensions.get("screen").width;

const Post = ({
  owner_id,
  post_id,
  firstname,
  lastname,
  cover,
  date,
  content,
  comment,
  likes,
  navigation,
}: IPost): JSX.Element => {
  return (
    <PostWrapper width={screenWidth}>
      <PostHeader date={date} fullName={firstname + " " + lastname} />
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
          style={{ flex: 1, width: screenWidth, height: 350 }}
          resizeMode="stretch"
        />
      )}
      <PostFooter
        fullName={firstname + " " + lastname}
        comments={comment}
        likes={likes}
        content={content}
        post_id={post_id}
        cover={cover}
        navigation={navigation}
      />
    </PostWrapper>
  );
};

export default Post;
