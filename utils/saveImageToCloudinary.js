export const saveImageToCloudinary = async (pics) => {
  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
  data.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME);
  console.log(process.env.CLOUDINARY_UPLOAD_PRESET);
  console.log(process.env.CLOUDINARY_CLOUD_NAME);
  console.log(process.env.CLOUDINARY_API_URL);
  try {
    const res = await fetch(process.env.CLOUDINARY_API_URL, {
      method: "POST",
      body: data,
    });
    const cloudData = await res.json();
    const picUrl = await cloudData.url.toString();
    console.log(typeof picUrl);
    return picUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
};
