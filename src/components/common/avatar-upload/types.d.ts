export interface AvatarUploadProps {
  value: string | File;
  onChange: (file: string | File | null) => void;
}
