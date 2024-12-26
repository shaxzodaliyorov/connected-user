type Option = {
  label: string;
  value: number;
};

export type GridOptionsProps = {
  options: Option[];
  value: number;
  onChange: (value: number) => void;
};
