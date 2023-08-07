import { Dimensions, Image, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { tabBarIconActiveColor } from "../../constants";
import PostHeader from "./PostHeader";
import Text from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { PostWarpper, Header } from "./Post.style";

const screenWidth: number = Dimensions.get("screen").width,
  paddingHorizontal = 25,
  url =
    "https://images.unsplash.com/photo-1682685797818-c9dc151d241e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

const user = {
  id: 1,
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati veritatis, at, commodi optio dolore aspernatur, eaque repellendus officia quaerat eius expedita vel ipsa quis? Officia praesentium culpa ex amet?",
  date: new Date(),
  title: "lrem titlest",
  cover: url,
  firstname: "Giorgi",
  lastname: "nefaridze",
  image: url,
  likes: 200,
  commment: 1233,
};

const Post = (): JSX.Element => {
  return (
    <PostWarpper width={screenWidth}>
      <PostHeader
        paddingHorizontal={paddingHorizontal}
        date={user.date}
        fullName={user.firstname + " " + user.lastname}
        userImage={url}
      />
      <Image
        source={{ uri: user.cover }}
        style={{ flex: 1, width: screenWidth, height: 350 }}
        resizeMode="stretch"
      />
      {/* <Footer>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesomeIcon icon={faHeart} />
              <Text
                color="black"
                size={3}
                text={[100].toString()}
                weight="400"
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesomeIcon icon={faComment} />
              <Text
                color="black"
                size={3}
                text={[100].toString()}
                weight="400"
              />
            </View>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faBookmark} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            columnGap: 15,
          }}
        >
          <Image
            source={{ uri: url }}
            style={{ borderRadius: 30, width: 30, height: 30 }}
          />
          <Input
            borderColor="white"
            borderRadius={0}
            handleChange={() => {}}
            keyboardType="default"
            secure={false}
            text="Add comment..."
            width={screenWidth - 70}
          />
        </View>
      </Footer>  */}
    </PostWarpper>
  );
};

export default Post;
