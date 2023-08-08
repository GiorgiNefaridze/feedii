import { ScrollView, FlatList } from "react-native";

import { IPost } from "../../components/Post/Types";
import Post from "../../components/Post/Post";

const Feed = (): JSX.Element => {
  const postArray: IPost[] = [
    {
      id: 1,
      firstname: "Mari",
      lastname: "nefaridze",
      date: new Date(),
      postDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati veritatis, at, commodi optio dolore aspernatur, eaque repellendus officia quaerat eius expedita vel ipsa quis? Officia praesentium culpa ex amet?",
      cover:
        "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      postOwnerImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      userImage:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      likes: 240,
      commment: 1233,
    },
    {
      id: 2,
      firstname: "Nika",
      lastname: "Nikoladze",
      date: new Date(),
      postDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati veritatis, at, commodi optio dolore aspernatur, eaque repellendus officia quaerat eius expedita vel ipsa quis? Officia praesentium culpa ex amet?",
      cover:
        "https://images.unsplash.com/photo-1691472249632-6bddca79b51d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      postOwnerImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      userImage:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      likes: 12,
      commment: 2,
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "grey" }}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={postArray}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={(post) => post.id.toString()}
      />
    </ScrollView>
  );
};

export default Feed;
