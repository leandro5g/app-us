import * as ImagePicker from "expo-image-picker";
import { getMimeType } from "../utils/get-mime-type";

export async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.6,
    base64: true,
    allowsMultipleSelection: false,
  });

  if (!result.canceled) {
    const image = result.assets[0];

    const mimeType = getMimeType(image.uri);

    return `data:image/${mimeType};base64,${image.base64}`;
  }
}
