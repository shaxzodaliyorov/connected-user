import { MainCard } from "@/components/main-card";
import { useState } from "react";

const VISA_STAGES = ["D-2", "D-10", "E-7", "F-2", "F-5"];

export const VisaRoadmap = () => {
  const [currentStage] = useState("E-7");

  const progressWidth = `${
    (VISA_STAGES.indexOf(currentStage) / (VISA_STAGES.length - 1)) * 100
  }%`;
  return (
    <section className="w-full">
      <div className="w-full container">
        <h3 className="text-[32px] font-medium leading-[38.72px] text-left text-[#0C0C0C]">
          Joe’s recommended visas
        </h3>
        <p className="text-xl font-normal leading-[30px] text-left text-[#0C0C0C] mt-2">
          Choose visa types and we will show you a roadmap
        </p>
        <MainCard className="mt-6">
          <div className="pt-4">
            <div className="bg-neutral-100 flex justify-between items-center px-2.5 relative rounded-[30px] w-full h-10 ">
              {VISA_STAGES.map((_, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-white z-10 rounded-full border"
                ></div>
              ))}
              <div
                style={{
                  width: progressWidth,
                }}
                className="h-8 px-[6px] left-1 visa_road_map_bg absolute top-1/2 -translate-y-1/2 rounded-[30px]"
              ></div>
            </div>
            <div className="w-full px-2.5 pt-4 flex justify-between">
              {VISA_STAGES.map((stage, index) => (
                <p
                  key={index}
                  className=" text-center text-[#0b0b0b] text-base font-medium font-['Inter Display']"
                >
                  {stage}
                </p>
              ))}
            </div>
            {/* <div className="w-full px-2.5 text-center flex justify-between">
              {VISA_STAGES_TEXT.map((_, index) => (
                <p key={index} className=" text-xs font-semibold leading-[18px] text-center">
                  Step {index + 1}
                </p>
              ))}
            </div>
            <div className="w-full px-2.5 text-center flex justify-between">
              {VISA_STAGES_TEXT.map((item, index) => (
                <p key={index} className="w-[121px] text-xs font-normal leading-[18px] text-[#737373]">
                  {item}
                </p>
              ))}
            </div> */}
          </div>
        </MainCard>
      </div>
    </section>
  );
};
