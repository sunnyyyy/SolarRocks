import FileResizer from 'react-image-file-resizer';

export const optimizeImage = (file: File, callback: (uri: string) => void) => {
  FileResizer.imageFileResizer(
    file,
    300,
    300,
    'WEBP',
    100,
    0,
    (uri) => {
      callback(uri.toString());
    },
    'base64'
  );
};
