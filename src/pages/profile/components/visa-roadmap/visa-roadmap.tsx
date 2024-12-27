import { MainCard } from "@/components/main-card";
import { useGetUser } from "@/hooks";
import { User } from "@/icons";
import { IoCheckmark } from "react-icons/io5";
import { TbArrowBadgeRight } from "react-icons/tb";
import { LuFlagTriangleRight } from "react-icons/lu";

const VISA_CATEGORY = [
  ["D-4", "D-2", "D-10", "E-7-1", "F-2-7", "F-5-16"],
  ["E-9", "E-7-4", "F-2-99", "F-5-1"],
  ["D-2", "D-10", "F-2R", "F-5-6R"],
];

export const VisaRoadmap = () => {
  const user = useGetUser();

  const currentCategory =
    VISA_CATEGORY?.find((item) =>
      item.includes(user?.visa_help?.visa_status || "")
    ) || [];

  const currentIndex = currentCategory.indexOf(
    user?.visa_help?.visa_status || ""
  );

  return (
    <MainCard>
      <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
        Visa Roadmap
      </h1>
      <div className="pt-4">
        <div
          style={{
            gridTemplateColumns: `repeat(${currentCategory?.length}, minmax(0, 1fr))`,
          }}
          className="bg-neutral-100 relative rounded-[30px] w-full h-10 grid  items-center px-2.5"
        >
          {currentCategory?.map((_, index) => (
            <div key={index} className="flex justify-center">
              <div
                key={index}
                className={` ${
                  index === currentCategory.length - 1
                    ? "bg-white"
                    : currentIndex < index
                    ? "bg-[#E8E8E8]"
                    : "bg-white"
                }  h-6 border w-6 flex items-center justify-center !z-10 rounded-full `}
              >
                {index === currentCategory.length - 1 ? (
                  <LuFlagTriangleRight className="w-[13.80px] h-[13.80px] ml-1 text-[#12B76A]" />
                ) : currentIndex === index ? (
                  <User className="w-[14.40px] h-[14.40px] text-[#12B76A]" />
                ) : currentIndex < index ? (
                  <TbArrowBadgeRight className="w-[14.40px] h-[14.40px] text-white" />
                ) : (
                  <IoCheckmark className="w-[14.40px] h-[14.40px] text-[#12B76A]" />
                )}
              </div>
            </div>
          ))}
          <div
            style={{
              gridTemplateColumns: `repeat(${currentCategory?.length}, minmax(0, 1fr))`,
            }}
            className="grid h-8 absolute w-full left-2 top-1/2 -translate-y-1/2 "
          >
            {currentIndex >= 0 && (
              <div
                style={{
                  gridColumn: `span ${currentIndex + 1}`,
                }}
                className=" w-full rounded-[30px] visa_road_map_bg "
              ></div>
            )}
          </div>
        </div>
        <div
          style={{
            gridTemplateColumns: `repeat(${currentCategory?.length}, minmax(0, 1fr))`,
          }}
          className="w-full pt-4 px-2.5 grid  justify-between "
        >
          {currentCategory?.map((stage, index) => (
            <p
              key={index}
              className="flex justify-center items-center text-center text-[#0b0b0b] text-base font-medium font-['Inter Display']"
            >
              {stage}
            </p>
          ))}
        </div>
      </div>
    </MainCard>
  );
};
