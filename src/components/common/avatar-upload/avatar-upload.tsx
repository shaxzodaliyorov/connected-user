import React, { useState, useEffect } from "react";
import { AvatarUploadProps } from "./types";
import { Button } from "../button";
import { IoCameraOutline } from "react-icons/io5";
import { HiTrash } from "react-icons/hi2";

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  value,
  onChange,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (value instanceof File) {
      const objectURL = URL.createObjectURL(value);
      setImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    } else if (typeof value === "string") {
      setImage(value);
    } else {
      setImage(null);
    }
  }, [value]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImage(objectURL);
      onChange(file);
      return () => URL.revokeObjectURL(objectURL);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    onChange(null);
  };

  return (
    <div className="flex items-center gap-x-5">
      <div className="flex border-2 border-white rounded-full">
        {image ? (
          <img
            src={image}
            alt="Avatar"
            className="w-[120px] h-[120px] rounded-[100px] border-2 border-white object-cover"
          />
        ) : (
          <img
            className="w-[120px] h-[120px] rounded-[100px] border-2 border-white object-cover"
            src="/images/placeholder.webp"
            alt="Placeholder"
          />
        )}
      </div>

      <div className="avatar-actions">
        <Button
          size="sm"
          fullWidth
          leftIcon={<IoCameraOutline size={18} />}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          Add photo
        </Button>
        <Button
          onClick={handleImageDelete}
          fullWidth
          variant="outline"
          leftIcon={<HiTrash size={18} color="#F13325" />}
          className="mt-3"
          size="sm"
        >
          Delete
        </Button>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};
