export const imageFileFilter = (filename: string) => {
  if (!filename.match(/\.(jpg|jpeg|png|gif)$/)) {
    return false;
  }
  return true;
};