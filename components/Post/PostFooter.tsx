import { useState, useEffect } from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as solidHeart,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useIsFocused } from "@react-navigation/native";

import { useIsLikedCkecker } from "../../hooks/useIsLikedCkecker";
import { useRemoveLike } from "../../hooks/useRemoveLike";
import { usePostLike } from "../../hooks/usePostLike";
import { useBookmark } from "../../hooks/useBookmark";
import { useBookmarkChecker } from "../../hooks/useBookmarkChecker";
import { useRemoveBookmark } from "../../hooks/useRemoveBookmark";
import { AuthContext } from "../../context/authContext";
import { PostContext } from "../../context/postContext";
import { Routes } from "../../navigation/Routes";
import { IPostFooter } from "./Types";

import {
  Footer,
  FooterStats,
  StatisticBlock,
  FooterStatsContainer,
} from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width,
  paddingHorizontal: number = 10;

const PostFooter = ({
  post_id,
  comments,
  likes,
  navigation,
}: IPostFooter): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(likes);

  const { userData } = AuthContext();
  const { likedChecker } = useIsLikedCkecker();
  const { postLike } = usePostLike();
  const { removeLike } = useRemoveLike();
  const { posts } = PostContext();
  const { bookmark } = useBookmark();
  const { bookmarkChecker } = useBookmarkChecker();
  const { removeBookmark } = useRemoveBookmark();
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
    //it make the logic messy(I hope call stack will do his job)
    setTimeout(() => {
      ckeckPostOnLike();
    }, 100);
  }, [likesCount, userData?.id, isFocused]);

  useEffect(() => {
    (async () => {
      const isChecked = await bookmarkChecker({
        post_id,
        user_id: userData?.id,
      });

      setIsSaved(isChecked);
    })();
  }, [isSaved, userData?.id, post_id, isFocused]);

  const savePost = () => {
    const postData = { post_id, user_id: userData?.id };

    if (isSaved) {
      removeBookmark(postData);
      setIsSaved(false);
    } else {
      bookmark(postData);
      setIsSaved(true);
    }
  };

  return (
    <Footer paddingHorizontal={0} width={screenWidth - 2 * paddingHorizontal}>
      <FooterStats>
        <FooterStatsContainer>
          <StatisticBlock onPress={likePost}>
            <FontAwesomeIcon
              icon={isLiked ? solidHeart : faHeart}
              color="white"
            />
            <Text style={{ color: "white" }}>{likesCount}</Text>
          </StatisticBlock>
          <StatisticBlock onPress={handleNavigate}>
            <FontAwesomeIcon icon={faComment} color="white" />
            <Text style={{ color: "white" }}>{comments}</Text>
          </StatisticBlock>
        </FooterStatsContainer>
        <TouchableOpacity onPress={savePost} style={{ marginRight: 30 }}>
          <FontAwesomeIcon
            icon={isSaved ? solidBookmark : faBookmark}
            color="white"
          />
        </TouchableOpacity>
      </FooterStats>
    </Footer>
  );
};

export default PostFooter;
