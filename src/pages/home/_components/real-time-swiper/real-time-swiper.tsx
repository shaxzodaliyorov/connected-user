/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwiperSlide, Swiper } from "swiper/react";
import { Card } from "../card";
import { useEffect, useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "swiper/css";
import { useGetUser, useHandleRequest } from "@/hooks";
import {
  useGetSaveJobIdsQuery,
  useLazyGetAllJobsQuery,
  useSaveJobMutation,
} from "@/features/jobs";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RealTimeSwiper = () => {
  const swiperRef = useRef<any>(null);

  const handleRequest = useHandleRequest();
  const [getAllJobs, { data: { data: jobs = [] } = {} }] =
    useLazyGetAllJobsQuery();
  const [saveJob] = useSaveJobMutation();
  const { data: { data: saveJobIds = [] } = {} } = useGetSaveJobIdsQuery("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useGetUser();

  const fetchJobs = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllJobs({ per_page: 20 }).unwrap();
        return response;
      },
    });
  };

  const onSaveAndUnsaved = async (id: string) => {
    if (!user) {
      navigate("/sign-in");
      return;
    }
    await handleRequest({
      request: async () => {
        const response = await saveJob({
          id,
          type: saveJobIds.includes(id) ? "unfavorite" : "favorite",
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Job Saved"), variant: "default" });
      },
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="w-full pb-[120px]">
      <div className="container relative mx-auto">
        <button
          onClick={handlePrev}
          className="w-10 h-10 absolute -left-5 rounded-full bg-white  -translate-y-1/2 top-1/2 z-20  shadow-[0px_1.82px_1.82px_0px_#00000026]"
        >
          <MdOutlineArrowBackIos className="ml-3" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 absolute -right-5  top-1/2 -translate-y-1/2 rounded-full bg-white  z-20 shadow-[0px_1.82px_1.82px_0px_#00000026]"
        >
          <MdOutlineArrowForwardIos className="ml-3 " />
        </button>

        <div className="w-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={15}
            slidesPerView={4}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <Card
                  onClick={() => navigate(`/jobs/${job._id}`)}
                  onSaveClick={(e) => {
                    e.stopPropagation();
                    onSaveAndUnsaved(job._id);
                  }}
                  salary_max={job.salary_max}
                  salary_min={job.salary_min}
                  title={job.job_title}
                  location={job.location || "---"}
                  type_of_employment={job.type_of_employment}
                  key={job._id}
                  company={job.company}
                  id={job._id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
