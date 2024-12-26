import { Button } from "@/components";
import { MainCard } from "@/components/main-card";
import { AddResume } from "@/icons";
import { RadioCard } from "./components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VISA = [
  {
    label: "D-10-1",
    value: "D-10-1",
  },
  {
    label: "E-7-4",
    value: "E-7-4",
  },
  {
    label: "F-2-7",
    value: "F-2-7",
  },
];

export const SelectVisaCalculation = () => {
  const [selectVisa, setSelectVisa] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <MainCard>
        <div className="flex items-center justify-between">
          <h1 className="text-[#0b0b0b] text-[32px] font-medium font-['Inter Display'] leading-[41.60px]">
            Visa Calculation
          </h1>
          <p className="flex items-center gap-x-[14px] text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-[17.60px]">
            Criteria / requirements may be updated{" "}
            <AddResume className="text-[#A3A3A3]" />
          </p>
        </div>
        <div className="py-[124px] ">
          <div>
            <p className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
              Choose a Visa Test
            </p>
            <p className="text-[#0b0b0b] mt-2 text-base font-normal font-['Inter Display'] leading-normal">
              Select the best visa score test for your application to check your
              eligibility.
            </p>
          </div>
          <div className="pt-4">
            <RadioCard
              value={selectVisa}
              onChange={setSelectVisa}
              name="visa"
              options={VISA}
            />
          </div>
        </div>
        <div className="py-[18px] px-5 bg-neutral-50 rounded-xl  ">
          <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
            Basic Information
          </h1>
          <p className="text-[#0b0b0b] mt-4 text-base font-normal font-['Inter Display'] leading-relaxed">
            To be qualified for D-10, You must meet the criteria below (maximum
            190 points)
          </p>
          <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
            Minimum score: 20 or more points in the basic items and a total
            score of 60 or more
          </p>
        </div>
        <div className="w-full pt-[31px] flex justify-end">
          <Button
            onClick={() => navigate("/visa-calculation?visa=" + selectVisa)}
            size="sm"
            disabled={!selectVisa}
            className=" py-[13px] px-[61px]"
          >
            Continue
          </Button>
        </div>
      </MainCard>
    </div>
  );
};
