import { MainCard } from "@/components/main-card";
import { Employees, Industry } from "@/icons";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
// import {Button, JobCard} from '@/components'
import { useGetCompanyQuery } from "@/features/company";
import { Loader } from "@/components/loader";
export const Company = () => {
  const { id } = useParams();
  const { data: { data: company } = {}, isLoading } = useGetCompanyQuery(
    id as string
  );

  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6">
          <Link to={`/jobs`} className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
        {isLoading ? (
          <Loader className="h-80 flex items-center justify-center" />
        ) : (
          <div className="flex flex-col gap-4">
            <div className="py-4">
              <div className="w-full rounded-[15px] bg-white">
                <div className="relative">
                  <img
                    className="w-full object-cover h-[260px] rounded-t-[15px]"
                    src="http://surl.li/byjkul"
                    alt=""
                  />
                  <div className="absolute left-[30px] top-[190px] shadow-[0px_4px_20px_0px_#A8A7A540] p-[5px] rounded-[20px] bg-white">
                    <img
                      className="object-cover w-[100px] h-[100px] rounded-[10px]"
                      src={company?.logo}
                      alt=""
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <MainCard className="flex justify-between ">
                    <div>
                      <h3 className="text-2xl font-medium leading-[29.04px] text-left text-[#0C0C0C]">
                        {company?.company_name}
                      </h3>
                      <div className="pt-2">
                        <p className="text-[16px] font-medium leading-[25.6px] text-left">
                          <span className="text-[#7D7D7D]">
                            {company?.location}
                          </span>{" "}
                          <span className="text-[#7D7D7D]">•</span>{" "}
                          <span className="text-[#0C0C0C]">
                            {company?.date_founded}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="py-[10px] pl-4 pr-[89px] bg-[#FAFAFA] rounded-[8px]">
                        <div className="flex items-center gap-2">
                          <Employees />
                          <p>Employees</p>
                        </div>
                        <div className="ppt-2">
                          <p className="text-[16px] font-semibold leading-[25.6px] text-left">
                            {company?.employee || 0}
                          </p>
                        </div>
                      </div>
                      <div className="py-[10px] pl-4 pr-[89px] bg-[#FAFAFA] rounded-[8px]">
                        <div className="flex items-center gap-2">
                          <Industry />
                          <p>Industry</p>
                        </div>
                        <div className="ppt-2">
                          <p className="text-[16px] font-semibold leading-[25.6px] text-left">
                            {company?.industry || 0}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MainCard>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <MainCard>
                <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">
                  About Company
                </h5>
                <div className="pt-4">
                  <p
                    className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]"
                    dangerouslySetInnerHTML={{
                      __html: company?.description || "",
                    }}
                  ></p>
                </div>
              </MainCard>
              <MainCard>
                <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">
                  Working at {company?.company_name}
                </h5>
                <div className="flex justify-between gap-3 items-center pt-4">
                  <img
                    className="w-[412px] h-[372px] rounded-[15px] "
                    src={company?.images[0]}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <img
                      className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] object-cover left-[606px] top-[1037px]"
                      src={company?.images[2]}
                      alt=""
                    />
                    <img
                      className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] object-cover left-[606px] top-[1037px]"
                      src={company?.images[1]}
                      alt=""
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-3">
                    <img
                      className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] object-cover left-[606px] top-[1037px]"
                      src={company?.images[3]}
                      alt=""
                    />
                    <img
                      className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] object-cover left-[606px] top-[1037px]"
                      src={company?.images[0]}
                      alt=""
                    />
                  </div>
                </div>
              </MainCard>
              {/* <MainCard>
            <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">About Company</h5>
            <div className="flex justify-between items-center pt-4">
              <p className="text-[16px] text-[#0C0C0C] font-normal leading-[25.6px] text-left">{company?.location}</p>
              <Link className="text-[#0062FF] text-[16px] font-medium leading-[25.6px] text-left" to={'/'}>
                View map
              </Link>
            </div>
          </MainCard> */}
              <div className=""></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
