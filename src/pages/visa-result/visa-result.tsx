import { Button } from "@/components";
import { MainCard } from "@/components/main-card";
import { useManageQuery } from "@/hooks";
import { GoodIcon } from "@/icons/good-icon";
import { HomeIcon } from "@/icons/home";
import { Phone } from "@/icons/phone";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export const VisaResult = () => {
  const { getQuery } = useManageQuery();
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="flex gap-x-4 items-start">
          <div className="w-2/3 flex flex-col gap-y-4">
            <MainCard className="flex justify-between">
              <div className="flex flex-col items-start gap-y-[200px]">
                <div>
                  <h4 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-[31.20px]">
                    Test completed
                  </h4>
                  <div className="flex items-center gap-x-2">
                    <GoodIcon
                      className={`w-[18px] h-[18px] ${
                        Number(getQuery("points")) >= 80
                          ? "text-[#12b669]"
                          : Number(getQuery("points")) >= 25
                          ? "text-[#F79009]"
                          : "text-[#737373]"
                      } `}
                    />
                    <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
                      Good points scored
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <h3
                    className={` ${
                      Number(getQuery("points")) >= 80
                        ? "text-[#12b669]"
                        : Number(getQuery("points")) >= 25
                        ? "text-[#F79009]"
                        : "text-[#737373]"
                    } text-right  text-[32px] font-normal font-['Inter Display'] leading-[41.60px]`}
                  >
                    {getQuery("points")}p
                  </h3>
                  <h4 className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
                    Total Score
                  </h4>
                  <p className="text-neutral-500 text-xs font-normal font-['Inter Display'] leading-tight text-[#737373]">
                    {Number(getQuery("points")) >= 80
                      ? "A"
                      : Number(getQuery("points")) >= 25
                      ? "B"
                      : "C"}
                    -Level in Manufacturing Skills.
                  </p>
                </div>
              </div>
              <div className="">
                <img
                  src={
                    Number(getQuery("points")) >= 80
                      ? "/images/visa-result-3.svg"
                      : Number(getQuery("points")) >= 25
                      ? "/images/visa-result-2.svg"
                      : "/images/visa-result-1.svg"
                  }
                  alt=""
                />
              </div>
            </MainCard>
            <MainCard className="flex justify-between">
              <Button
                className="h-12 gap-x-1"
                leftIcon={<ReloadIcon />}
                variant="outline"
                onClick={() =>
                  navigate(`/visa-calculation?visa=${getQuery("visa")}`)
                }
              >
                Try Again
              </Button>
              <Button
                className="h-12"
                leftIcon={<HomeIcon />}
                variant="primary"
                onClick={() => navigate(`/visa-select-calculation`)}
              >
                Go Back
              </Button>
            </MainCard>
          </div>
          <MainCard className="w-1/3">
            <p className="w-[250px] text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
              Need help with your visa application? Connected is here!
            </p>
            <div className="pt-4">
              <Button
                className="h-12"
                leftIcon={<Phone className="w-[18px] h-[18px]" />}
                variant="outline"
              >
                Connect
              </Button>
            </div>
          </MainCard>
        </div>
      </div>
    </section>
  );
};
