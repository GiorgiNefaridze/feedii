import { View } from "react-native";

import { IComment } from "./Types";
import Header from "../Header/Header";

const Comment = ({ comment, firstname, lastname }: IComment): JSX.Element => {
  const fullName = firstname + " " + lastname;
  const legitComment =
    comment.length > 100 ? comment.slice(0, 100) + "..." : comment;

  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 13,
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "grey",
      }}
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
        <Header color="white" size={3} text={fullName.slice(0, 1)} />
      </View>
      <View>
        <Header color="white" size={2} text={fullName} lineHeight={20} />
        <Header color="white" size={3} text={legitComment} lineHeight={20} />
      </View>
    </View>
  );
};

export default Comment;
