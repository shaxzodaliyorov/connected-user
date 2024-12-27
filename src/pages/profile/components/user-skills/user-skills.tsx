import { Avatar } from "@/components";
import { Education, Kiip, Penalty, Topik } from "@/icons";
import { ProfileProgress } from "../profile-progress";
import { useGetUser } from "@/hooks";
import { useEffect, useState } from "react";

interface TimeRemainingProps {
  targetDate: string;
}

interface TimeRemainingState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeRemaining = ({ targetDate }: TimeRemainingProps) => {
  const [timeRemaining, setTimeRemaining] = useState<
    TimeRemainingState | string | null
  >(null);

  useEffect(() => {
    const calculateTimeDifference = () => {
      if (!targetDate) {
        setTimeRemaining(null);
        return;
      }
      const now = new Date();
      const target = new Date(targetDate);

      if (isNaN(target.getTime())) {
        setTimeRemaining("Invalid date format.");
        return;
      }

      const difference = target.getTime() - now.getTime();

      const calculateUnits = (diff: number) => {
        const absDiff = Math.abs(diff);
        const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((absDiff % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
      };

      const units = calculateUnits(difference);
      setTimeRemaining(
        difference < 0 ? { ...units, days: -units.days } : units
      );
    };

    calculateTimeDifference();
    const intervalId = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const pluralize = (count: number, forms: string[]): string => {
    const n = Math.abs(count);
    if (n % 10 === 1 && n % 100 !== 11) {
      return forms[0];
    }
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return forms[1];
    }
    return forms[2];
  };

  if (timeRemaining === null) {
    return (
      <h4 className="text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">
        Loading...
      </h4>
    );
  }

  if (typeof timeRemaining === "string") {
    return (
      <h4 className="text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">
        {timeRemaining}
      </h4>
    );
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  const hasNonZeroValue =
    days !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0;

  return (
    <h4 className="text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">
      {hasNonZeroValue ? (
        <>
          {days !== 0 && (
            <>
              {days}{" "}
              <span className="text-sm mr-1 font-normal leading-[16.94px] text-left text-[#7D7D7D]">
                {pluralize(days, ["d", "d", "d"])}
              </span>{" "}
            </>
          )}
          {hours !== 0 && (
            <>
              {hours}{" "}
              <span className="text-sm mr-1 font-normal leading-[16.94px] text-left text-[#7D7D7D]">
                {pluralize(hours, ["h", "h", "h"])}
              </span>{" "}
            </>
          )}
          {minutes !== 0 && (
            <>
              {minutes}{" "}
              <span className="text-sm mr-1 font-normal leading-[16.94px] text-left text-[#7D7D7D]">
                {pluralize(minutes, ["min", "min", "min"])}
              </span>{" "}
            </>
          )}
          {seconds !== 0 && (
            <>
              {seconds}{" "}
              <span className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">
                {pluralize(seconds, ["s", "s", "s"])}
              </span>
            </>
          )}
        </>
      ) : (
        <>
          0{" "}
          <span className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">
            seconds
          </span>
        </>
      )}
    </h4>
  );
};

export const UserSkills = () => {
  const user = useGetUser();
  return (
    <div className=" flex gap-4">
      <div className="w-1/2 border border-[#F5F5F5] p-[15px] rounded-[15px]">
        <Avatar
          src={user?.profile_photo || ""}
          name=""
          className="w-[72px] h-[72px]"
        />
        <div className="py-[18px]">
          <div className="w-full h-[1px] bg-[#F5F5F5]" />
        </div>
        <div className="flex flex-col gap-y-4 justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">
              Visa status
            </p>
            <h4 className=" text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">
              {user?.visa_help?.visa_status}
            </h4>
          </div>
          <div className="w-full h-[1px] bg-[#F5F5F5]" />
          <div className="flex flex-col">
            <p className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">
              Visa expiry date
            </p>
            <TimeRemaining
              targetDate={user?.visa_help?.visa_expire_date || ""}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 grid grid-cols-2  gap-4">
        <div className="border border-[#F5F5F5] p-[14px] rounded-[8px]">
          <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
            Education <Education className="text-[#12B76A]" />
          </h3>
          <ProfileProgress
            progress={user?.visa_help?.educational_background || 0}
          />
        </div>
        <div className="border border-[#F5F5F5] p-[14px] rounded-[8px]">
          <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
            KIIP <Kiip className="text-[#12B76A]" />
          </h3>
          <ProfileProgress progress={user?.visa_help?.kiip || 0} />
        </div>
        <div className="border border-[#F5F5F5] p-[14px] rounded-[8px]">
          <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
            Topik <Topik className="text-[#12B76A]" />
          </h3>
          <ProfileProgress progress={user?.visa_help?.topik || 0} />
        </div>
        <div className="border border-[#F5F5F5] p-[14px] rounded-[8px]">
          <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
            Penalty <Penalty className="text-[#12B76A]" />
          </h3>
          <ProfileProgress progress={user?.visa_help?.violation ? 100 : 50} />
        </div>
      </div>
    </div>
  );
};
