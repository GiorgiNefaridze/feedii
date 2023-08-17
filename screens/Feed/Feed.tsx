import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { useGetPosts } from "../../hooks/useGetPosts";
import { PostContext } from "../../context/postContext";
import Post from "../../components/Post/Post";
import FeedHeader from "../../components/FeedHeader/FeedHeader";

import styles from "./Feed.style";

const Feed = (): JSX.Element => {
  const { posts } = PostContext();
  const { getPosts } = useGetPosts();

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      await getPosts();
    })();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FeedHeader />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={(post) => post.post_id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;
