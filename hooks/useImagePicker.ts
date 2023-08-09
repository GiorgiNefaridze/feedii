import { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

export const useImagePicker = () => {
  const [image, setIMage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const imagePicker = async () => {
    setLoading(true);
    try {
      const options = {
        base64: true,
        quality: 1,
        mediaTypes: MediaTypeOptions.Images,
      };

      const result = await launchImageLibraryAsync(options);

      setIMage(result?.assets[0]?.uri);
      setLoading(false);
    } catch (error) {
      setIMage("");
      setLoading(false);
    }
  };

  return { imagePicker, image, loading };
};
