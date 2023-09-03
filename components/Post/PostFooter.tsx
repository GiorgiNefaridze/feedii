import { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useIsFocused } from "@react-navigation/native";

import { useIsLikedCkecker } from "../../hooks/useIsLikedCkecker";
import { useRemoveLike } from "../../hooks/useRemoveLike";
import { usePostLike } from "../../hooks/usePostLike";
import { IPostFooter } from "./Types";
import { AuthContext } from "../../context/authContext";
import { PostContext } from "../../context/postContext";
import { Routes } from "../../navigation/Routes";

import { Footer, FooterStats, Stats, FooterComment } from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width,
  paddingHorizontal: number = 10,
  gapBtwInpAndAvatar: number = 0;

const PostFooter = ({
  fullName,
  comments,
  likes,
  content,
  post_id,
  cover,
  navigation,
}: IPostFooter): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(likes);

  const { userData } = AuthContext();
  const { likedChecker } = useIsLikedCkecker();
  const { postLike } = usePostLike();
  const { removeLike } = useRemoveLike();
  const { posts } = PostContext();
  const isFocused = useIsFocused();

  const ckeckPostOnLike = async () => {
    const liked = await likedChecker({ post_id, user_id: userData?.id });

    setIsLiked(liked);
  };

  const likePost = () => {
    const postData = { post_id, user_id: userData?.id };

    if (isLiked) {
      removeLike(postData);
      setLikesCount((prev) => Number(prev) - 1);
      return;
    }

    postLike(postData);
    setLikesCount((prev) => Number(prev) + 1);
  };

  const handleNavigate = () => {
    navigation.navigate(Routes.DetailedPost, {
      data: { ...posts?.find((post) => post.post_id === post_id), isLiked },
    });
  };

  useEffect(() => {
    //Use setTimeout, cuz while requesting, checker req is sending more fast and
    //it make the logic messy(I hope call stack will do his job ^-^)
    setTimeout(() => {
      ckeckPostOnLike();
    }, 100);
  }, [likesCount, userData?.id, isFocused]);

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
          <Stats onPress={likePost}>
            <FontAwesomeIcon
              icon={isLiked ? solidHeart : faHeart}
              color="white"
            />
            <Text style={{ color: "white" }}>{likesCount}</Text>
          </Stats>
          <Stats onPress={handleNavigate}>
            <FontAwesomeIcon icon={faComment} color="white" />
            <Text style={{ color: "white" }}>{comments}</Text>
          </Stats>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBookmark} color="white" />
        </TouchableOpacity>
      </FooterStats>
    </Footer>
  );
};

export default PostFooter;
