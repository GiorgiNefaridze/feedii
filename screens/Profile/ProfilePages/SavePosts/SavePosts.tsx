import { useEffect } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { useGetBookmarks } from "../../../../hooks/useGetBookmarks";
import { AuthContext } from "../../../../context/authContext";
import { useRemoveBookmark } from "../../../../hooks/useRemoveBookmark";
import { IPost, ISavePosts } from "./Types";
import { Routes } from "../../../../navigation/Routes";
import { IData } from "../../../../hooks/useIsLikedCkecker";
import Header from "../../../../components/Header/Header";

import {
  SavePostsWrapper,
  HiddenItemsWrapper,
  HiddenItem,
  PostWrapper,
} from "./SavePosts.style";

const screenWidth: number = Dimensions.get("screen").width,
  itemWidth: number = 75;

const Post = (props: IPost) => {
  const date = props?.date.slice(0, 10);
  const content =
    props?.content.length > 30
      ? props?.content.slice(0, 30) + "..."
      : props?.content;

  const fullName =
    props?.firstname.toUpperCase() + " " + props?.lastname.toUpperCase();

  return (
    <PostWrapper width={screenWidth} style={{ borderRadius: 10, padding: 10 }}>
      <Header color="white" size={3} text={content} lineHeight={20} />
      <View>
        <Header color="grey" size={4} text={fullName} lineHeight={15} />
        <Header color="grey" size={4} text={date} lineHeight={15} />
      </View>
    </PostWrapper>
  );
};

const SavePosts = ({ navigation }: ISavePosts) => {
  const { getBookmarks, posts, setPosts } = useGetBookmarks();
  const { removeBookmark } = useRemoveBookmark();
  const { userData } = AuthContext();

  useEffect(() => {
    getBookmarks(userData?.id);
  }, [userData?.id, posts.length]);

  const handleBack = () => {
    navigation.goBack();
  };

  const seePost = (item: IPost) => {
    navigation.navigate(Routes.DetailedPost, { data: item });
  };

  const removePost = (data: IData) => {
    removeBookmark(data);
    setPosts((prevPosts) => {
      if (prevPosts.length === 0) {
        return;
      }

      return prevPosts.filter((post) => post?.post_id !== data.post_id);
    });
  };

  return (
    <SavePostsWrapper>
      <TouchableOpacity onPress={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} color="white" />
      </TouchableOpacity>
      <Header color="white" size={1} text="Bookmarks:" weight="600" />
      {posts?.length === 0 ? (
        <Header color="white" size={1} text="No Saved Posts !" weight="700" />
      ) : (
        <SwipeListView
          data={posts}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item) => item?.post_id?.toString()}
          renderHiddenItem={({ item }) => (
            <HiddenItemsWrapper width={2 * itemWidth}>
              <HiddenItem
                onPress={() =>
                  removePost({ post_id: item?.post_id, user_id: userData?.id })
                }
                width={itemWidth}
                style={{ backgroundColor: "#ff4b4b" }}
              >
                <Header color="white" size={3} text="Delete" weight="500" />
              </HiddenItem>
              <HiddenItem
                width={itemWidth}
                style={{
                  backgroundColor: "#6161ff",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={() => seePost(item)}
              >
                <Header color="white" size={3} text="Open" weight="500" />
              </HiddenItem>
            </HiddenItemsWrapper>
          )}
          rightOpenValue={-2 * itemWidth + 10}
        />
      )}
    </SavePostsWrapper>
  );
};

export default SavePosts;
