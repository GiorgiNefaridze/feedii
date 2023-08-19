import { Dimensions, Image } from "react-native";

import { IPost } from "./Types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import { PostWrapper } from "./Post.style";

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
