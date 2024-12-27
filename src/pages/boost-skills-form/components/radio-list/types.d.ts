export interface RadioListProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  options: { value: string | number; label: string }[];
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}
