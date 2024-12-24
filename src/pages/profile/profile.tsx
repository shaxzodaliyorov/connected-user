import { MainCard } from "@/components/main-card";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  BoostSkills,
  CreateResume,
  UserSkills,
  VisaRoadmap,
} from "./components";
import { Button, ProfileJobCard, StatusButton } from "@/components";
import { AddResume } from "@/icons";
import { IoIosArrowForward } from "react-icons/io";
import { useGetAllMyResumeQuery } from "@/features/resume/resume";
import { Loader } from "@/components/loader";
import { Resume } from "@/types";
import { ListItem } from "../my-resume/components";
import { useGetUser } from "@/hooks";

export const Profile = () => {
  const { data: { data: resumes = [] } = {}, isLoading } =
    useGetAllMyResumeQuery("");
  const navigate = useNavigate();

  const user = useGetUser();

  console.log(user);

  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6">
          <Link to="/" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="w-[65%]">
            <MainCard className="w-full">
              <UserSkills />
            </MainCard>
            <div className="pt-4">
              <VisaRoadmap />
            </div>
            <div className="pt-[80px]">
              <CreateResume />
            </div>
            <div className="pt-20">
              <div className="flex justify-between">
                <h3
                  onClick={() => navigate("/add-resume")}
                  className="text-2xl font-medium cursor-pointer leading-[29.04px] text-left text-[#0C0C0C] flex gap-2 items-center"
                >
                  My Resume <AddResume className="text-[#0062FF] mt-[3px]" />
                </h3>
                <Link
                  to={"/my-resume"}
                  className=" text-base font-medium leading-[25.6px] text-[#0062FF] text-left items-center flex gap-1"
                >
                  See All <IoIosArrowForward />
                </Link>
              </div>
              <div className="flex pt-4 flex-col gap-y-4">
                {isLoading ? (
                  <Loader className="h-80 flex items-center justify-center" />
                ) : (
                  resumes
                    ?.slice(0, 2)
                    ?.map((resume: Resume) => (
                      <ListItem key={resume._id} resumeItem={resume} />
                    ))
                )}
              </div>
            </div>
            <div className="pt-[120px]">
              <h4 className="text-2xl font-medium leading-[29.04px] text-left">
                Recent Applications History
              </h4>

              <div className="pt-4 flex flex-col gap-y-4">
                <ProfileJobCard
                  logo="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  company="Company Name"
                  salary_min={50}
                  salary_max={15}
                  job_title="Job Title"
                  location="Location"
                  buttonstatus={
                    <StatusButton variant="applied" label="Applied" />
                  }
                />
                <ProfileJobCard
                  logo="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  company="Company Name"
                  salary_min={50}
                  salary_max={15}
                  job_title="Job Title"
                  location="Location"
                  buttonstatus={
                    <StatusButton variant="declined" label="Declined" />
                  }
                />
                <ProfileJobCard
                  logo="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  company="Company Name"
                  salary_min={50}
                  salary_max={15}
                  job_title="Job Title"
                  location="Location"
                  buttonstatus={<StatusButton variant="hired" label="Hired" />}
                />
                <ProfileJobCard
                  logo="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  company="Company Name"
                  salary_min={50}
                  salary_max={15}
                  job_title="Job Title"
                  location="Location"
                  buttonstatus={
                    <StatusButton variant="interview" label="Interview" />
                  }
                />
                <div className="pt-4">
                  <Button variant="outline" fullWidth>
                    Show more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <BoostSkills />
          </div>
        </div>
      </div>
    </section>
  );
};
