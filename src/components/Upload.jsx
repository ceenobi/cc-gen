import React, { useState } from 'react';
import { Icon, Input, FormControl, FormLabel } from '@chakra-ui/react';

export default function Upload() {
  const [wrongFileType, setWrongFileType] = useState(false);
  const [imageAsset, setImageAsset] = useState();
  const [loading, setLoading] = useState(false);
  
  const uploadImage = async e => {
    const selectedFile = e.target.files[0];
    const fileTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (fileTypes.includes(selectedFile.type)) {
      setWrongFileType(false);
      setLoading(true);
      const formData = new FormData();
    }
  };
  
  return (
    <>
      <Input
        variant="unstyled"
        py={3}
        type="file"
        cursor="pointer"
        name="upload-video"
        //onChange={e => uploadVideo(e)}
      />
    </>
  );
}
