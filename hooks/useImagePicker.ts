import { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

export const useImagePicker = () => {
  const [image, setIMage] = useState<string>("");

  const imagePicker = async () => {
    try {
      const options = {
        base64: true,
        quality: 1,
        mediaTypes: MediaTypeOptions.Images,
      };

      const result = await launchImageLibraryAsync(options);

      setIMage(result?.assets[0]?.uri);
    } catch (error) {
      setIMage("");
    }
  };

  return { imagePicker, image };
};
