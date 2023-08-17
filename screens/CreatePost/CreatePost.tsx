import { useState, useEffect } from "react";
import { View, Dimensions, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";
import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../context/authContext";
import { useCreate } from "../../hooks/useCreate";
import { isValidInputs } from "../../server/utils/isValidInputs";
import { useImagePicker } from "../../hooks/useImagePicker";
import {
  successMessage,
  tabBarIconActiveColor,
  errorMessage,
} from "../../constants";
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

  const { image, imagePicker, setImage } = useImagePicker();
  const { userData } = AuthContext();

  const isFocused = useIsFocused();

  const handleImagePicker = async () => {
    await imagePicker();
  };

  const { createPost, error, result, setError, setResult } = useCreate();

  const handlePost = async () => {
    const isValid = isValidInputs([value]);

    if (isValid && Object.keys(userData)?.length) {
      const post = {
        owner_id: userData?.id,
        content: value,
        cover: image.base64,
        date: new Date().toISOString(),
      };

      await createPost(post);
    }
  };

  useEffect(() => {
    setValue("");
    setImage("");
  }, [isFocused]);

  useEffect(() => {
    if (result?.length) {
      Toast.show({ type: "success", text1: successMessage, text2: result });
      setValue("");
      setImage({ base64: "", uri: "" });
      setResult("");
    }
    if (error?.length) {
      Toast.show({ type: "error", text1: errorMessage, text2: error });
      setError("");
    }
  }, [result, error]);

  return (
    <Container paddingHorizontal={paddingHorizontal}>
      <Toast />
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
          handlePress={handlePost}
          padding={8}
          width={70}
          textTransform="uppercase"
          isDisabled={false}
        />
      </View>
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
          value={value}
          handleChange={setValue}
          keyboardType="default"
          secure={false}
          text="Enter a post description..."
          placeholderTextColor="grey"
          width={screenWidth - 2 * paddingHorizontal}
          inpPadding={0}
        />
      </View>
      {!image?.uri && (
        <ImageUploader
          width={screenWidth}
          paddingHorizontal={paddingHorizontal}
          onPress={handleImagePicker}
        >
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            color={"white"}
            size={30}
          />
          <Button
            text="Browse"
            color="white"
            bgColor={tabBarIconActiveColor}
            borderColor={tabBarIconActiveColor}
            borderRadius={10}
            handlePress={handleImagePicker}
            padding={8}
            width={90}
            textTransform="uppercase"
            isDisabled={false}
          />
        </ImageUploader>
      )}
      {image?.uri && (
        <Image
          source={{ uri: image?.uri }}
          style={{
            width: screenWidth - 2 * paddingHorizontal,
            height: 200,
          }}
        />
      )}
    </Container>
  );
};

export default CreatePost;
