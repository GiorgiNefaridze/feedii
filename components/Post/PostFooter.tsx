import { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useIsLikedCkecker } from "../../hooks/useIsLikedCkecker";
import { useRemoveLike } from "../../hooks/useRemoveLike";
import { usePostLike } from "../../hooks/usePostLike";
import { IPostFooter } from "./Types";
import { AuthContext } from "../../context/authContext";
import { PostContext } from "../../context/postContext";
import { Routes } from "../../navigation/Routes";
import Heading from "../Header/Header";
import Header from "../Header/Header";
import Input from "../Input/Input";

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

  const ckeckPostOnLike = async () => {
    const liked = await likedChecker({ post_id, user_id: userData?.id });

    setIsLiked(liked);
  };

  const likePost = async () => {
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
      data: posts?.find((post) => post.post_id === post_id),
    });
  };

  useEffect(() => {
    //Use setTimeout, cuz while requesting, checker req is sending more fast and
    //it make the logic messy(I hope call stack will do his job ^-^)
    setTimeout(() => {
      ckeckPostOnLike();
    }, 100);
  }, [likesCount, userData?.id]);

  return (
    <Footer paddingHorizontal={0} width={screenWidth - 2 * paddingHorizontal}>
      {cover?.length < 1 && (
        <Header
          color="white"
          size={4}
          text={content}
          weight="400"
          lineHeight={25}
        />
      )}
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
          <Stats>
            <FontAwesomeIcon icon={faComment} color="white" />
            <Text style={{ color: "white" }}>{comments}</Text>
          </Stats>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBookmark} color="white" />
        </TouchableOpacity>
      </FooterStats>
      {cover?.length >= 1 && (
        <Header
          color="white"
          size={4}
          text={content}
          weight="400"
          lineHeight={18}
        />
      )}
      <FooterComment
        width={screenWidth - 2 * paddingHorizontal}
        onPress={handleNavigate}
      >
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
          <Heading
            color="white"
            size={2}
            text={fullName?.slice(0, 1)}
            weight="400"
          />
        </View>
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
