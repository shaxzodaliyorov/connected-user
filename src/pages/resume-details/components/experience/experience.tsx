import { Button } from "@/components";
import { MainCard } from "@/components/main-card";
import { AddResume } from "@/icons";
import { useTranslation } from "react-i18next";
import { Props } from "../my-resume/types";
import { useState } from "react";
import { ItemList } from "./components";
import { AddModal } from "./components/add-modal";

export const Experiences = ({ resume }: Props) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const [open, setOpen] = useState(false);
  const displayedExperiences = showMore
    ? resume?.experience
    : resume?.experience?.slice(0, 3);

  return (
    <MainCard className="mt-4">
      <div className="flex gap-x-2 items-center">
        <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">
          {t("Experience")}
        </h4>
        <button onClick={() => setOpen(true)}>
          <AddResume className="text-[#0062FF]" />
        </button>
      </div>
      <div className="py-6">
        <div className="w-full h-px bg-[#F5F5F5]" />
      </div>

      {displayedExperiences.length ? (
        displayedExperiences?.map((experience, index) => (
          <ItemList resume={resume} experience={experience} key={index} />
        ))
      ) : (
        <div className="py-10">
          <p className="text-base text-center font-semibold lg:leading-[28.8px] text-gray-500">
            {t("No experience found")}
          </p>
        </div>
      )}

      {resume?.experience?.length > 3 && (
        <Button
          fullWidth
          variant="secondary"
          onClick={() => setShowMore(!showMore)}
          className="bg-white hover:bg-white text-base mt-6 font-medium leading-[25.6px] text-center h-5 text-[#0062FF]"
        >
          {showMore
            ? "Show less educations"
            : `${"Show"} ${
                resume?.experience?.length - 3
              } ${"more educations"}`}
        </Button>
      )}
      <AddModal open={open} close={() => setOpen(false)} resume={resume} />
    </MainCard>
  );
};
