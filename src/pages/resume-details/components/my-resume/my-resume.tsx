import { useTranslation } from "react-i18next";
import { Props } from "./types";
import {
  CurrentVisa,
  Download,
  Experiance,
  Gmail,
  Location,
  Pencil,
} from "@/icons";
import { Avatar, Button } from "@/components";
import { Phone } from "@/icons/phone";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { IoIosGlobe } from "react-icons/io";
import { Languages } from "@/icons/languages";
import { useNavigate } from "react-router-dom";

export const MyResume = ({ resume }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src="http://surl.li/gtmuxp"
          className="rounded-t-[15px] object-cover bg-center w-full h-[200px]"
          alt=""
        />
        <button
          onClick={() => navigate(`/edit-resume/${resume?._id}`)}
          className="absolute top-[20px] right-[20px] p-[10px] bg-[#FFFFFF] rounded-full text-[#0062FF]"
        >
          <Pencil />
        </button>
        <div className="border-[3px] border-[#FFFFFF] absolute top-[100px] left-[30px] rounded-full">
          <Avatar
            name="Abdullah"
            src={resume?.photo}
            className="w-[140px] h-[140px] "
          />
        </div>
      </div>
      <div className="px-[30px] py-6 bg-[#FFFFFF] rounded-b-[15px]">
        <div className="flex justify-between relative">
          <div className="flex flex-col">
            <h3 className="text-2xl font-medium leading-9 mt-8 text-left">
              {resume?.full_name}
            </h3>
            <p className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
              {resume?.position}
            </p>
          </div>
          <div className="absolute -top-[20px] -right-px p-[10px] bg-[#FFFFFF] rounded-full text-[#0062FF]">
            <Pencil />
          </div>
          <div className="flex gap-x-2 items-center mt-[17px] mr-4">
            <Location className="text-[#737373]" />
            <p className="text-base font-normal text-[#0C0C0C] leading-6 text-left">
              {resume?.country}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-4">
          <div className="w-1/3 bg-[#FAFAFA] p-5 rounded-[15px] flex flex-col gap-y-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <CurrentVisa className="text-[#737373]" />
                <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
                  {t("Current Visa")}
                </p>
              </div>
              <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                {resume?.current_visa}
              </h4>
            </div>
            <div className="w-full h-px bg-[#FFFFFF] " />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <Gmail className="text-[#737373]" />
                <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
                  Email
                </p>
              </div>
              <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                {resume?.email}
              </h4>
            </div>
            <div className="w-full h-px bg-[#FFFFFF] " />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <Phone className="text-[#737373] w-[18px] h-[18px]" />
                <p className="text-sm font-normal leading-[22.4px] text-left ml-[1px] text-[#737373]">
                  Phone
                </p>
              </div>
              <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                {resume?.phone_number}
              </h4>
            </div>
          </div>
          <div className="w-2/3 bg-[#FAFAFA] p-5 rounded-[15px] flex flex-col gap-y-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <Languages className="text-[#737373]" />
                <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
                  Languages
                </p>
              </div>
              <div className="flex gap-x-[6px]">
                {resume?.languages?.map((item, index) => (
                  <p
                    key={index}
                    className="px-[10px] py-px bg-[#FFFFFF] rounded-[33px]"
                  >
                    {item?.level} • {item?.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-[#FFFFFF] " />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <img
                  src="http://surl.li/iigizw"
                  className="text-[#737373]  w-[18px] h-[18px]"
                />
                <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
                  Expected Salary
                </p>
              </div>
              <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                {resume?.expected_salary}
              </h4>
            </div>
            <div className="w-full h-px bg-[#FFFFFF] " />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <Experiance className="text-[#737373]" />
                <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
                  Working Experiance
                </p>
              </div>
              <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                {resume?.working_experience}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="secondary"
            className="text-base font-normal bg-[#FAFAFA] leading-[20.8px] text-left rounded-[45px] px-4 py-[10px]"
            rightIcon={<Download className="text-[#0062FF]" />}
          >
            Resume.pdf
          </Button>
          <div className="flex gap-x-2 ">
            <Button
              leftIcon={<FaInstagram />}
              variant="secondary"
              className="text-base font-normal leading-[20.8px] text-left bg-[#FAFAFA] rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
            >
              Instagram
            </Button>
            <Button
              leftIcon={<TfiTwitter />}
              variant="secondary"
              className="text-base font-normal leading-[20.8px] text-left bg-[#FAFAFA] rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
            >
              Twitter
            </Button>
            <Button
              leftIcon={<IoIosGlobe />}
              variant="secondary"
              className="text-base font-normal leading-[20.8px] text-left bg-[#FAFAFA] rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
            >
              www.jomes.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
