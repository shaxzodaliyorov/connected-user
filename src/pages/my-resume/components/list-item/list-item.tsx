import { MainCard } from "@/components/main-card";
import { Props } from "./types";
import { useNavigate } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { SecondDropdown } from "@/components";
import { Option } from "@/components/common/second-dropdown/type";
import { BiSolidTrashAlt } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useDeleteResumeMutation } from "@/features/resume/resume";
import { useHandleRequest } from "@/hooks";
import { toast } from "@/components/ui/use-toast";

export const ListItem = ({ resumeItem }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [deleteResume] = useDeleteResumeMutation();
  const handleRequest = useHandleRequest();

  const deleteResumeHandler = async () => {
    if (!confirm(t("Are you sure you want to delete this resume?"))) {
      return;
    }

    await handleRequest({
      request: async () => {
        const response = await deleteResume(resumeItem._id as string);
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Successfully deleted"), variant: "default" });
      },
    });
  };

  const OPTIONS: Option[] = [
    {
      label: "Edit",
      value: "edit",
      icon: <HiOutlinePencilAlt size={22} />,
      onClick: (e) => {
        e?.stopPropagation();
        navigate(`/edit-resume/${resumeItem._id}`);
      },
    },
    {
      label: "Delete",
      value: "delete",
      icon: <BiSolidTrashAlt size={20} />,
      onClick: (e) => {
        e?.stopPropagation();
        deleteResumeHandler();
      },
    },
  ];

  return (
    <div
      onClick={() => navigate(`/my-resume/${resumeItem._id}`)}
      className="w-full cursor-pointer"
    >
      <MainCard>
        <div className="flex justify-between items-start">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={resumeItem.photo}
                alt=""
              />

              {/* BACKENDDAN KKEMAYABDI STATUS  */}
              {/* <div className="px-2 py-1 rounded-[31px] border-[#12B76A] border text-center bg-white absolute top-[69px] left-4">
                <p className="text-[#12b669] text-xs font-semibold font-['Inter Display']"> {resumeItem.}</p>
              </div> */}
            </div>
            <div>
              <h3 className="text-xl font-medium leading-[22px] text-left">
                {resumeItem.position}
              </h3>
              <div className="pt-2">
                <p className=" text-base font-normal leading-6 text-left text-[#7D7D7D]">
                  {t("Updated on")}{" "}
                  {dayjs(resumeItem.updated_at).format("DD.MM.YYYY")}
                </p>
              </div>
            </div>
          </div>
          <SecondDropdown options={OPTIONS}>
            <button>
              <IoMdMore className="text-[25px]" />
            </button>
          </SecondDropdown>
        </div>
        <div className="pt-12">
          <div className="w-full rounded-xl flex justify-between bg-[#FAFAFA] p-5">
            <h4 className=" text-base font-normal leading-[20.8px] text-left text-[#0C0C0C]">
              Statistics for the week
            </h4>
            <div className="flex gap-x-6 ">
              <div className="flex  gap-x-[6px] items-center">
                <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                  {resumeItem.views}
                </span>
                <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">
                  views
                </span>
              </div>
              <div className="w-px h h-6 bg-[#C5C5C5]" />
              <div className="flex gap-x-[6px] items-center">
                <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                  {resumeItem.seen}
                </span>
                <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">
                  seen
                </span>
              </div>
              <div className="w-px h h-6 bg-[#C5C5C5] " />
              <div className="flex gap-x-[6px] items-center ">
                <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                  {resumeItem.offers}
                </span>
                <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">
                  offers
                </span>
              </div>

              {/* MATCH UPDAN DATA KELMAYABDI  */}

              {/* <div className="w-px h h-6 bg-[#C5C5C5]" />
              <div className="flex  gap-x-[6px] ">
                <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{resumeItem.skills}</span>
                <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">
                  match up
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </MainCard>
    </div>
  );
};
