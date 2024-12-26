import { Button } from "@/components";
import { MainCard } from "@/components/main-card";
import { GoodIcon } from "@/icons/good-icon";
import { HomeIcon } from "@/icons/home";
import { Phone } from "@/icons/phone";
import { ReloadIcon } from "@radix-ui/react-icons";

export const VisaResult = () => {
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
                    <GoodIcon className="w-[18px] h-[18px] text-[#12b669]" />
                    <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
                      Good points scored
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-right text-[#12b669] text-[32px] font-normal font-['Inter Display'] leading-[41.60px]">
                    80p
                  </h3>
                  <h4 className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed">
                    Total Score
                  </h4>
                  <p className="text-neutral-500 text-xs font-normal font-['Inter Display'] leading-tight text-[#737373]">
                    A-Level in Manufacturing Skills.
                  </p>
                </div>
              </div>
              <div className="">
                <img src="./images/book-bg.svg" alt="" />
              </div>
            </MainCard>
            <MainCard className="flex justify-between">
              <Button
                className="h-12 gap-x-1"
                leftIcon={<ReloadIcon />}
                variant="outline"
              >
                Try Again
              </Button>
              <Button
                className="h-12"
                leftIcon={<HomeIcon />}
                variant="primary"
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
