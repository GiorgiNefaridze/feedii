import { ScrollView, View } from "react-native";

import Post from "../../components/Post/Post";

const Feed = (): JSX.Element => {
  return (
    <ScrollView style={{ backgroundColor: "grey" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default Feed;
