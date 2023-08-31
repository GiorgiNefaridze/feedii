import { useState } from "react";
import { View, Dimensions } from "react-native";

import { IComment } from "./Types";
import Header from "../Header/Header";
import Comment from "./Comment";

import { CommentComponent } from "./Comments.style";

const screenWidth: number = Dimensions.get("screen").width;

const Comments = ({ comments }: { comments: IComment[] }): JSX.Element => {
  const commentsCount = comments?.length ?? 0;
  return (
    <CommentComponent width={screenWidth}>
      <View
        style={{
          width: screenWidth - 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Header
          color="white"
          size={1}
          text="Comments"
          weight="500"
          lineHeight={30}
        />
        {commentsCount > 0 && (
          <Header
            color="white"
            size={3}
            text={commentsCount.toString()}
            weight="400"
            lineHeight={30}
          />
        )}
      </View>
      <View style={{ rowGap: 12 }}>
        {comments?.map((comment) => {
          return <Comment {...comment} />;
        })}
      </View>
    </CommentComponent>
  );
};

export default Comments;
