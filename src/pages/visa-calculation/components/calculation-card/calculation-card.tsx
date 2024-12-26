import { MainCard } from "@/components/main-card";
import { GridOptions } from "./components";
import { useManageQuery } from "@/hooks";
import { VISA_CATEGORIES } from "@/constants/visa-categories/visa-categories";
import { useState } from "react";
import { Button } from "@/components";

export const CalculationCard = () => {
  const [selectedPoints, setSelectedPoints] = useState<Record<string, number>>(
    {}
  );

  const calculateTotalPoints = () =>
    Object.values(selectedPoints).reduce((sum, points) => sum + points, 0);

  const handleOptionChange = (criteriaName: string, value: number) => {
    setSelectedPoints((prev) => ({ ...prev, [criteriaName]: value }));
  };
  const { getQuery } = useManageQuery();

  return (
    <div className="w-full relative">
      <MainCard className="mt-6">
        <div className="flex flex-col gap-y-2">
          {VISA_CATEGORIES.find(
            (vsa) => vsa.category === getQuery("visa")
          )?.criteria.map((criteria, index) => (
            <div key={index}>
              <h1 className="text-[#161C1C] text-lg not-italic font-medium leading-[160%]">
                {criteria?.name}
              </h1>
              {criteria?.description && (
                <div>
                  <p className="text-[#0C0C0C] text-base not-italic font-normal leading-[160%] mb-4">
                    {criteria?.description}
                  </p>
                </div>
              )}
              {criteria?.notes && (
                <div className="flex flex-col gap-y-2">
                  {criteria?.notes?.map((note) => (
                    <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-normal">
                      {note}
                    </p>
                  ))}
                </div>
              )}
              {criteria.options && (
                <div className="pt-4">
                  <GridOptions
                    options={criteria.options.map((opt) => ({
                      label: opt.label,
                      value: opt.points,
                    }))}
                    value={selectedPoints[criteria.name] || 0}
                    onChange={(value) =>
                      handleOptionChange(criteria.name, value)
                    }
                  />
                </div>
              )}
              <div className="py-10">
                <div className="w-full h-px bg-[#D6DDEB]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full">
          <Button className="min-w-[190px]">Continue</Button>
        </div>
      </MainCard>
      <div className="flex items-center justify-center w-full">
        <div className="w-[400px] rounded-lg bg-white p-[18px] border border-[#F5F5F5] flex items-center justify-between fixed shadow-md bottom-[30px]">
          <p className="font-medium text-[24px] leading-[31.2px] text-[#0C0C0C]">
            {getQuery("visa")}
          </p>
          <div className="flex items-center justify-center w-[50%]">
            <p className="text-sm text-[#737373] leading-[18.2px]">
              You need a few more points
            </p>
            <p className="bg-[#F79009] text-white py-[5px] px-[20px] rounded-xl font-semibold text-[18px] w-max">
              {calculateTotalPoints() || 0}p
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
