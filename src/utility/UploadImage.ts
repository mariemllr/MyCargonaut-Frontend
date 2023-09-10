import { AxiosError } from "axios";
import rest from "./rest";

const uploadImage = async (image?: string) => {
  if (!image) return;
  try {
    const formData = new FormData();
    const blob = await fetch(image).then((b) => b.blob());
    formData.append("file", blob);
    await rest.put("/user/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    if (error instanceof AxiosError)
      console.error(error.response?.data.message);
  }
};

export default uploadImage;
