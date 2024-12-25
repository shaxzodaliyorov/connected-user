import { MainCard } from "@/components/main-card";
import { BoldTabs, Button } from "@/components";
import { Calculation, SkillLevelTestIcons } from "@/icons";
import { useNavigate } from "react-router-dom";
import { Information, VisaRoadmap } from "./components";
import { VISAS } from "@/constants/visa";
import { useState } from "react";

export const VisaRoadMapPage = () => {
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState("All");

  return (
    <section className="w-full">
      <div className="w-full container">
        <MainCard className="flex justify-between items-center">
          <div>
            <Button
              leftIcon={<SkillLevelTestIcons />}
              variant="secondary"
              className="rounded-full py-[10.5px] px-6 text-[#0b0b0b] text-sm font-medium font-['Inter Display']"
            >
              Skill level test
            </Button>
            <div className="pt-[49px]">
              <h1 className="w-[65%] text-[32px] text-[#0C0C0C] font-medium">
                Evaluate your skills and receive a certified qualification!
              </h1>
            </div>
            <div className="pt-[14px]">
              <p className="w-[75%] text-xl font-normal text-[#0C0C0C]">
                Take our professional test to showcase your capabilities and
                stand out to employers.
              </p>
            </div>
            <div className="pt-6">
              <Button
                className="px-9"
                onClick={() =>
                  navigate("/skill-level-test/test?testSetup=start")
                }
                variant="primary"
              >
                Start Your Test
              </Button>
            </div>
          </div>
          <div>
            <img src="./images/skill-level-test.svg" alt="" />
          </div>
        </MainCard>
        <div className="pt-[120px]">
          <VisaRoadmap />
        </div>
        <div className="pt-[120px]">
          <h3 className="text-[32px] font-medium leading-[38.72px] text-left text-[#0C0C0C]">
            All Visa Information
          </h3>
          <BoldTabs
            isBg
            tabClassName="bg-transparent"
            onChange={(tab) => setFiltered(tab as string)}
            defaultValue={filtered}
            tabs={[
              { label: "All (37)", value: "All" },
              { label: "Employment (14)", value: "Employment" },
              { label: "Study (2)", value: "Study" },
              { label: "Residence Type (7)", value: "Residence Visas" },
              { label: "Travel (3)", value: "Travel Visas" },
              { label: "Other (11)", value: "Other" },
            ]}
          />
          <div className="grid grid-cols-4 gap-4">
            {VISAS.filter((c) => c.category === filtered).map((visa, index) => (
              <Information
                key={index}
                title={visa.code}
                text={visa.description}
              />
            ))}
          </div>
          {/* <div className="mt-4">
            <Button fullWidth variant="outline">
              Show more
            </Button>
          </div> */}
        </div>
        <div className="flex gap-x-4 mt-[120px]">
          <div className="w-1/2 bg-white rounded-[15px] p-[30px]">
            <Calculation />
            <div className="pt-[127px]">
              <h4 className="text-[#1289F8] text-[32px] font-medium leading-[38.72px] text-left">
                Visa Calculation
              </h4>
              <p className="w-[80%]">
                Discover your visa score in under 2 minutes and see how you
                stack up!
              </p>
              <div className="pt-6">
                <Button
                  onClick={() => navigate("/visa-calculation")}
                  variant="primary"
                  className="text-[#fff]"
                >
                  Start Your Test
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[420px] bg-white rounded-[15px] p-[30px] ">
            <img
              className="w-[483px] h-[390px] m-auto "
              src="./images/calculate.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
