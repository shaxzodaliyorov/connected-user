import { BoldTabs, Card } from "@/components";
import { Loader } from "@/components/loader";
import { useLazyGetApplicationsQuery } from "@/features/jobs";
import { useHandleRequest } from "@/hooks";
import { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export const Application = () => {
  const [
    getApplications,
    { data: { data: applications = [] } = {}, isFetching },
  ] = useLazyGetApplicationsQuery({});
  const handleRequest = useHandleRequest();

  const [filtered, setFiltered] = useState("all");

  const fetchApplications = async () => {
    await handleRequest({
      request: async () => {
        const response = await getApplications({
          status:
            filtered === "all"
              ? undefined
              : (filtered as
                  | "applied"
                  | "accepted"
                  | "interview"
                  | "hired"
                  | "declined"),
        }).unwrap();
        return response;
      },
    });
  };

  useEffect(() => {
    fetchApplications();
  }, [filtered]);

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
          <div className="py-4">
            <h1 className="text-[32px] font-semibold lg:leading-[38.4px] text-left">
              Application
            </h1>
          </div>
          <div>
            <BoldTabs
              isBg
              tabClassName="bg-transparent"
              onChange={(tab) => setFiltered(tab as string)}
              defaultValue={filtered}
              tabs={[
                { label: "All", value: "all" },
                { label: "Applied", value: "applied" },
                { label: "Accepted", value: "accepted" },
                { label: "Interview", value: "interview" },
                { label: "Hired", value: "hired" },
                { label: "Declined", value: "declined" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {isFetching ? (
            <Loader className="w-full h-80" />
          ) : applications.length ? (
            applications?.map((item, index) => (
              <Card
                logo={item.company?.logo}
                key={index}
                title={item.job?.job_title}
                salary={""}
                location={`${
                  item.company?.location
                } | ${item.job?.type_of_employment?.join(" · ")}`}
                status={item.status}
              />
            ))
          ) : (
            <p className="text-center my-10 text-gray-400">
              No applications found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
