import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../context/authContext";
import { PostContext } from "../../context/postContext";
import { getUser } from "../../context/authContext";
import { useGetPosts } from "../../hooks/useGetPosts";
import Post from "../../components/Post/Post";
import FeedHeader from "../../components/FeedHeader/FeedHeader";

import styles from "./Feed.style";

const Feed = ({ navigation }: { navigation: any }): JSX.Element => {
  const { posts } = PostContext();
  const { getPosts } = useGetPosts();
  const { setUserData } = AuthContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    getPosts();
    getUser(setUserData);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FeedHeader />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post navigation={navigation} {...item} />}
        keyExtractor={(post) => post.post_id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;
