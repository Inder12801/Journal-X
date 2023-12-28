export const saveImageToCloudinary = async (pics) => {
  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", "journal-x");
  data.append("cloud_name", "dabccp9iy");
  // console.log(process.env.CLOUDINARY_UPLOAD_PRESET);
  // console.log(process.env.CLOUDINARY_CLOUD_NAME);
  // console.log(process.env.CLOUDINARY_API_URL);
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dabccp9iy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const cloudData = await res.json();
    console.log(cloudData.url);
    const picUrl = await cloudData.url.toString();
    console.log(typeof picUrl);
    return picUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
};
