import React, {useEffect, useState} from 'react'

export const BoldTabs: React.FC<BoldTabsProps> = ({
  tabs,
  defaultTabIndex = 0,
  contentClassName = '',
  tabsClassName = '',
}) => {
  const [activeTabIdx, setActiveTabIdx] = useState(defaultTabIndex)

  useEffect(() => {
    if (tabs?.length && defaultTabIndex !== undefined) {
      setActiveTabIdx(defaultTabIndex)
    }
  }, [tabs, defaultTabIndex])

  if (!tabs?.length) {
    return
  }

  return (
    <div className="w-full pt-6">
      <div className={`flex justify-between mb-6 ${tabsClassName}`}>
        <div className="flex overflow-x-auto space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-[8px] ${
                activeTabIdx === index
                  ? 'bg-[#0062FF] text-white border border-[#0062FF]'
                  : 'bg-white text-[#0C0C0C] border border-[#E8E8E8]'
              } transition duration-300`}
              onClick={() => setActiveTabIdx(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs[activeTabIdx]?.leftSideContent && <div className="ml-4">{tabs[activeTabIdx].leftSideContent}</div>}
      </div>
      <div className={`mt-4 ${contentClassName}`}>{tabs[activeTabIdx]?.children}</div>
    </div>
  )
}
