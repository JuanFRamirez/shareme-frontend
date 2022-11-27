export const imageValidator = (fileType) => {
  if (
    fileType === "image/png" ||
    fileType === "image/svg" ||
    fileType === "image/jpeg" ||
    fileType === "image/gif" ||
    fileType === "image/tiff"
  ) {
    return true;
  } else {
    return false;
  }
};
