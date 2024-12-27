import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BoldTabsProps } from "./types";

export const BoldTabs: React.FC<BoldTabsProps> = ({
  tabs,
  defaultTabIndex = 0,
  contentClassName = "",
  tabsClassName = "",
  onChange,
  tabClassName,
  isBg,
  defaultValue,
}) => {
  const [activeTabValue, setActiveTabValue] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (defaultValue) {
      setActiveTabValue(defaultValue);
    } else if (tabs?.length) {
      setActiveTabValue(tabs[defaultTabIndex]?.value || tabs[0]?.value);
    }
  }, [tabs, defaultValue, defaultTabIndex]);

  const handleTabClick = (tabValue: string) => {
    setActiveTabValue(tabValue);
    onChange?.(tabValue);
  };

  const activeTab = tabs?.find((tab) => tab.value === activeTabValue);

  return (
    <div className="w-full pt-6">
      <div className={`flex justify-between mb-6 ${tabsClassName}`}>
        <div className="flex overflow-x-auto space-x-2">
          {tabs?.map((tab) => (
            <button
              key={tab.value}
              className={cn(
                `px-4 py-2 text-sm font-medium rounded-[8px] transition duration-300`,
                activeTabValue === tab.value
                  ? "!bg-[#0062FF] text-white border border-[#0062FF]"
                  : `${
                      isBg ? "bg-white" : "bg-transparent"
                    } text-[#0C0C0C] border border-[#E8E8E8]`,
                tabClassName
              )}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab?.leftSideContent && (
          <div className="ml-4">{activeTab.leftSideContent}</div>
        )}
      </div>
      <div className={`mt-4 ${contentClassName}`}>{activeTab?.children}</div>
    </div>
  );
};
