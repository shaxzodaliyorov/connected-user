import { Button } from "@/components/common";
import { CalculateIcon } from "@/icons";
import { useNavigate } from "react-router-dom";

export const Calculate = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="w-full container flex">
        <div className="w-1/2 bg-[#285CAD]  rounded-s-[15px] p-[30px]">
          <img src="./images/calculate-images.svg" alt="calculate" />
          <div className="pt-[137px] pb-9">
            <p className="text-[32px] font-medium text-white leading-[38.72px] text-left">
              Enter your details to get personalized information and guidance on
              the application proccess.
            </p>
          </div>
          <Button
            onClick={() => navigate("/visa-select-calculation")}
            variant="secondary"
            className="text-[#285CAD]"
            leftIcon={<CalculateIcon />}
          >
            Calculate your visa
          </Button>
        </div>
        <div className="w-1/2 bg-[#FFFFFF]  rounded-e-[15px] px-[74px] py-[30px] ">
          <img
            src="./images/audio-mixer.svg"
            className="items-center text-center"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
