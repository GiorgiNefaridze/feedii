import { Dimensions, Image } from "react-native";

import { IPost } from "./Types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import { PostWarpper } from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width;

const Post = ({
  commment,
  cover,
  date,
  firstname,
  id,
  lastname,
  likes,
  postDescription,
  postOwnerImage,
  userImage,
}: IPost): JSX.Element => {
  return (
    <PostWarpper width={screenWidth}>
      <PostHeader
        date={date}
        fullName={firstname + " " + lastname}
        postOwnerImage={postOwnerImage}
      />
      <Image
        source={{ uri: cover }}
        style={{ flex: 1, width: screenWidth, height: 350 }}
        resizeMode="stretch"
      />
      <PostFooter
        comments={commment}
        likes={likes}
        postDescription={postDescription}
        userImg={userImage}
      />
    </PostWarpper>
  );
};

export default Post;
