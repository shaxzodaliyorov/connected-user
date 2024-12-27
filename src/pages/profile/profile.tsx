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
import { AddResume, StartNow } from "@/icons";
import { IoIosArrowForward } from "react-icons/io";
import { useGetAllMyResumeQuery } from "@/features/resume/resume";
import { Loader } from "@/components/loader";
import { Resume } from "@/types";
import { ListItem } from "../my-resume/components";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useGetUser } from "@/hooks";
import { useGetApplicationsQuery } from "@/features/jobs";

export const Profile = () => {
  const { data: { data: resumes = [] } = {}, isLoading } =
    useGetAllMyResumeQuery("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useGetUser();
  const { data: { data: applications = [] } = {}, isFetching } =
    useGetApplicationsQuery({});

  const onClose = () => {
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    if (!user?.visa_help) {
      setOpen(true);
    }
  }, [user?.visa_help]);

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
                {isFetching ? (
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
                {isLoading ? (
                  <Loader className="h-80 flex items-center justify-center" />
                ) : (
                  applications.map((app) => (
                    <ProfileJobCard
                      key={app._id}
                      id={app?.job?._id}
                      logo={app?.company?.logo}
                      company={app?.company?.company_name}
                      job_title={app?.job?.job_title}
                      location={app?.company?.location}
                      buttonstatus={
                        <StatusButton
                          variant={
                            app.status as
                              | "applied"
                              | "declined"
                              | "interview"
                              | "hired"
                          }
                          label={app.status}
                        />
                      }
                    />
                  ))
                )}
                {/* <div className="pt-4">
                  <Button variant="outline" fullWidth>
                    Show more
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <BoostSkills />
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-transparent border-transparent shadow-transparent">
          <DialogHeader>
            <DialogTitle>
              <h4 className="text-xl font-medium leading-[22px] text-center text-[#0C0C0C]">
                Boost Your Skills for Korea
              </h4>
              <p className="text-base font-normal leading-6 text-center mt-[6px]">
                Boost your language skills for visa readiness.
              </p>
              <Button
                onClick={() => navigate("/get-visa-help")}
                size="sm"
                className="m-auto mt-6"
                leftIcon={<StartNow />}
              >
                Start now
              </Button>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};
