import { AxiosError } from 'axios';
import { setImage } from '../reducer/user';
import rest from './rest';

const uploadImage = async (image?: string, dispatch?: any) => {
  if (!image || !dispatch) return;
  try {
    const formData = new FormData();
    const blob = await fetch(image).then((b) => b.blob());
    formData.append('file', blob);
    const res = await rest.put('/user/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch(setImage(res.data));
  } catch (error) {
    if (error instanceof AxiosError)
      console.error(error.response?.data.message);
  }
};

export default uploadImage;
