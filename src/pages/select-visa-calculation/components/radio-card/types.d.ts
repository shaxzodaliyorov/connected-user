type Option = {
  label: string;
  value: string;
};
export interface RadioProps {
  options: Option[];
  name: string;
  value: string;
  onChange: (value: string) => void;
}
