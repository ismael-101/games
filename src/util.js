//media resize
// export const smallImage = (imagePath, size) => {
  
//   const image = imagePath.match(/media\/screenshots/)
//     ? imagePath.replace(
//         "/media/screenshots",
//         `/media/resize/${size}/-/screenshots`
//       )
//     : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
//   return image;
// };

export const smallImage = (imagePath, size) => {
  // Add a null check for imagePath
  if (imagePath && imagePath.match) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "/media/screenshots",
          `/media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
  } else {
    // Handle the case where 'imagePath' is null or undefined
    console.error("Image path is null or undefined.");
    return null; // or handle accordingly based on your requirements
  }
};