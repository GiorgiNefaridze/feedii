import { useState } from "react";
import { View, Dimensions, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { tabBarIconActiveColor } from "../../constants";
import { useImagePicker } from "../../hooks/useImagePicker";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import { Container, ImageUploader } from "./CreatePost.style";
import styles from "../Login/Login.style";

const screenWidth: number = Dimensions.get("screen").width,
  paddingHorizontal: number = 25;

interface IProps {
  navigation: unknown;
}

const CreatePost = ({ navigation }: IProps): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const { image, imagePicker, loading } = useImagePicker();

  const handleImagePicker = async () => {
    await imagePicker();
  };

  return (
    <Container paddingHorizontal={paddingHorizontal}>
      {image.length && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
      <View
        style={[
          styles.header,
          {
            height: "auto",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </TouchableOpacity>
        <Button
          text="Post"
          color="white"
          bgColor={tabBarIconActiveColor}
          borderColor={tabBarIconActiveColor}
          borderRadius={10}
          handlePress={() => {}}
          padding={8}
          width={70}
          textTransform="uppercase"
          isDisabled={false}
        />
      </View>
      <ImageUploader
        width={screenWidth}
        paddingHorizontal={paddingHorizontal}
        onPress={handleImagePicker}
      >
        <FontAwesomeIcon icon={faArrowUpFromBracket} color="white" size={30} />
      </ImageUploader>
      <View style={{ rowGap: 10 }}>
        <Header
          color="grey"
          size={1}
          text="What's in your mind ?🤯"
          weight="500"
        />
        <Input
          borderColor="transparent"
          borderRadius={0}
          handleChange={setValue}
          keyboardType="default"
          secure={false}
          text="Enter a post description..."
          value={value}
          placeholderTextColor="grey"
          width={screenWidth - 2 * paddingHorizontal}
          inpPadding={0}
        />
      </View>
    </Container>
  );
};

export default CreatePost;
