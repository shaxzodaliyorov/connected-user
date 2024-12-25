type Tab = {
  label: string;
  value: string;
  children?: React.ReactNode;
  leftSideContent?: React.ReactNode;
};

type BoldTabsProps = {
  tabs: Tab[];
  defaultTabIndex?: number;
  contentClassName?: string;
  tabsClassName?: string;
  tabClassName?: string;
  onChange?: (value?: string) => void;
  isBg?: boolean;
  defaultValue?: string;
};
