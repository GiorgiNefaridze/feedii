import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  faArrowLeft,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Toast from "react-native-toast-message";

import { IPost } from "../Post/Types";
import { IProps } from "./Types";
import { darkBgColor, successMessage, errorMessage } from "../../constants";
import { AuthContext } from "../../context/authContext";
import { useCreateComment } from "../../hooks/useCreateComment";
import { useGetComments } from "../../hooks/useGetComments";
import { IComment } from "../Comments/Types";
import Comments from "../Comments/Comments";
import PostHeader from "../Post/PostHeader";
import Header from "../Header/Header";
import Input from "../Input/Input";

import { PostWrapper, PostFooter, CommentBox } from "./DetailedPost.style";
import { Stats } from "../Post/Post.style";

const screenWidth = Dimensions.get("screen").width;

const DetailedPost = ({
  route: { params },
  navigation,
}: IProps): JSX.Element => {
  const [post, setPost] = useState<IPost>({} as IPost);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const { userData } = AuthContext();
  const { createComment, result, err, setErr, setResult } = useCreateComment();
  const { getComments, result: allComments } = useGetComments();

  const getAllComments = async () => {
    await getComments(post?.post_id);
    if (allComments.length) {
      setComments(allComments);
    }
  };

  useEffect(() => {
    const post = params?.data;
    setPost(post);
    getAllComments();
  }, [allComments, params.data?.post_id]);

  useEffect(() => {
    if (result?.length) {
      Toast.show({ type: "success", text1: successMessage, text2: result });
      setResult("");
    }

    if (err?.length) {
      Toast.show({ type: "error", text1: errorMessage, text2: err });
      setErr("");
    }

    setValue("");
  }, [err, result]);

  const handleBack = () => {
    navigation?.goBack();
  };

  const handleComment = async () => {
    await createComment({
      owner_id: userData.id,
      post_id: params.data.post_id,
      comment: value,
    });
    getAllComments();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PostWrapper contentContainerStyle={{ rowGap: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} color="white" size={18} />
          </TouchableOpacity>
          <PostHeader
            date={post?.date}
            fullName={post?.firstname + " " + post?.lastname}
          />
        </View>
        {post?.cover?.length >= 1 && (
          <Image
            source={{ uri: post?.cover }}
            style={{ flex: 1, width: screenWidth, height: 350 }}
            resizeMode="stretch"
          />
        )}
        <Header
          color="white"
          size={3}
          text={post.content}
          weight="500"
          lineHeight={25}
          isContent={true}
        />
        <Comments comments={comments} />
      </PostWrapper>
      <PostFooter>
        <Stats onPress={() => {}}>
          <FontAwesomeIcon
            icon={isLiked ? solidHeart : faHeart}
            color="white"
          />
        </Stats>
        <CommentBox width={screenWidth - 90}>
          <Input
            text="Write a comment"
            borderColor="transparent"
            placeholderTextColor="grey"
            borderRadius={10}
            handleChange={setValue}
            value={value}
            keyboardType="default"
            secure={false}
            inpPadding={10}
            bgColor={darkBgColor}
          />
          <TouchableOpacity onPress={handleComment}>
            <FontAwesomeIcon icon={faPaperPlane} color="white" size={15} />
          </TouchableOpacity>
        </CommentBox>
      </PostFooter>
      <Toast />
    </SafeAreaView>
  );
};

export default DetailedPost;
