export type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  side: "top" | "bottom" | "left" | "right";
  className?: string;
};
