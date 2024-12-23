import {
  useGetSaveJobIdsQuery,
  useLazyGetAllJobsQuery,
  useSaveJobMutation,
} from "@/features/jobs";
import { useGetUser, useHandleRequest } from "@/hooks";
import { useEffect, useState } from "react";
import { Card } from "../card";
import { Button } from "@/components/common";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NewPositions = () => {
  const handleRequest = useHandleRequest();
  const [
    getAllJobs,
    { data: { data: jobs = [], next_page } = {}, isFetching },
  ] = useLazyGetAllJobsQuery();
  const [saveJob] = useSaveJobMutation();
  const { data: { data: saveJobIds = [] } = {} } = useGetSaveJobIdsQuery("");
  const { t } = useTranslation();
  const [perPage, setPerPage] = useState(8);
  const user = useGetUser();
  const navigate = useNavigate();

  const fetchJobs = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllJobs({ per_page: perPage }).unwrap();
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

  const handlePerPage = () => {
    setPerPage(perPage + 8);
  };

  useEffect(() => {
    fetchJobs();
  }, [perPage]);

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h1 className="text-[#0b0b0b] text-[32px] font-medium font-['Inter Display']">
          New Positions
        </h1>
        <div className="w-full grid gap-4 pt-6 grid-cols-4">
          {jobs?.map((item) => (
            <Card
              onClick={() => navigate(`/jobs/${item._id}`)}
              onSaveClick={() => onSaveAndUnsaved(item._id)}
              salary_max={item.salary_max}
              salary_min={item.salary_min}
              title={item.job_title}
              type_of_employment={item.type_of_employment}
              location={item.location}
              key={item._id}
              company={item.company}
              id={item?._id}
            />
          ))}
        </div>
        <Button
          disabled={!next_page}
          onClick={handlePerPage}
          loading={isFetching}
          fullWidth
          variant="outline"
          className="mt-4"
        >
          Show more
        </Button>
      </div>
    </section>
  );
};
