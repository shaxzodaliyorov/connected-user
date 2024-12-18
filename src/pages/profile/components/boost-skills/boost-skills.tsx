import { Button } from "@/components";
import { StartNow } from "@/icons";
import { IoReload } from "react-icons/io5";

export const BoostSkills = () => (
  <>
    <h4 className="text-xl font-medium leading-[22px]  text-[#0C0C0C]">Boost Your Skills for Korea</h4>
    <div className="pt-[6px]">
      <p className="w-full text-base font-normal leading-6 text-[#0C0C0C]">
        Boost your language skills for visa readiness.
      </p>
    </div>
    <div className="flex pt-6 gap-4">
      <Button leftIcon={<StartNow />} className="py-2 px-6" variant="primary">
        Start now
      </Button>
      <button className="flex items-center gap-[6px] text-[#0062FF]  text-base font-medium leading-5 text-center">
        <span>
          <IoReload size={18} className="font-bold" />
        </span>
        Fill out the form
      </button>
    </div>
  </>
)
