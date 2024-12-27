export interface Tab {
  label: string;
  value: string;
  children?: React.ReactNode;
  leftSideContent?: React.ReactNode;
}

export interface BoldTabsProps {
  tabs: Tab[];
  defaultTabIndex?: number;
  contentClassName?: string;
  tabsClassName?: string;
  onChange?: (value: string) => void;
  tabClassName?: string;
  isBg?: boolean;
  defaultValue?: string;
}
