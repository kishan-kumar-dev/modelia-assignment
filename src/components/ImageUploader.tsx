import React from "react";
import type { ChangeEvent } from "react";
import { resizeImage } from "../utils/resizeImage";

interface Props {
  onUpload: (dataUrl: string) => void;
}

const ImageUploader: React.FC<Props> = ({ onUpload }) => {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const resized = await resizeImage(e.target.files[0]);
    onUpload(resized);
  };

  return (
    <div className="mb-2">
      <label className="block mb-1 font-medium">Upload Image:</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        className="border rounded p-1 focus:outline-none focus:ring focus:ring-blue-400"
      />
    </div>
  );
};

export default ImageUploader;
