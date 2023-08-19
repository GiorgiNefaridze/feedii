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
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { IPost } from "../Post/Types";
import { IProps } from "./Types";
import { darkBgColor } from "../../constants";
import PostHeader from "../Post/PostHeader";
import Header from "../Header/Header";
import Input from "../Input/Input";

import { PostWrapper, PostFooter } from "./DetailedPost.style";
import { Stats } from "../Post/Post.style";

const screenWidth = Dimensions.get("screen").width;

const DetailedPost = ({
  route: { params },
  navigation,
}: IProps): JSX.Element => {
  const [post, setPost] = useState<IPost>({} as IPost);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setPost(params?.data);
  }, []);

  const handleBack = () => {
    navigation?.goBack();
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
      </PostWrapper>
      <PostFooter>
        <Stats onPress={() => {}}>
          <FontAwesomeIcon
            icon={isLiked ? solidHeart : faHeart}
            color="white"
          />
        </Stats>
        <Input
          width={screenWidth - 90}
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
      </PostFooter>
    </SafeAreaView>
  );
};

export default DetailedPost;
