import { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

interface IImage {
  base64: string | undefined | null;
  uri: string;
}

export const useImagePicker = () => {
  const [image, setImage] = useState<IImage>({} as IImage);

  const imagePicker = async () => {
    try {
      const options = {
        base64: true,
        quality: 1,
        mediaTypes: MediaTypeOptions.Images,
      };

      const result = await launchImageLibraryAsync(options);

      setImage({
        base64: result?.assets[0]?.base64,
        uri: result?.assets[0]?.uri,
      });
    } catch (error) {
      setImage({ base64: "", uri: "" });
    }
  };

  return { imagePicker, image, setImage };
};
