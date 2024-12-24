import { Button } from "@/components/common";
import { motion } from "framer-motion";
import { useSkillLevelTestUpdateMutation } from "@/features/skill-level";
import {
  useGetGradeDetails,
  useGetUser,
  useHandleRequest,
  useQuery,
} from "@/hooks";
import { useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";
import { PdfContent } from "./components/template/certificate";
import { useTranslation } from "react-i18next";
import { MainCard } from "@/components/main-card";
import { ALevel } from "../a-level/a-level";
import { BLevel } from "../b-level";
import { CLevel } from "../c-level";

export const Congratulations = ({ score }: { score: number | null }) => {
  const [updateSkillLevel] = useSkillLevelTestUpdateMutation();
  const totalQuestions = 20;
  const correctAnswers = score || 0;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const handleRequest = useHandleRequest();
  const query = useQuery();
  const user = useGetUser();
  const contentRef = useRef(null);
  const { t } = useTranslation();
  const { grade } = useGetGradeDetails(percentage);

  const fetchSkillLevel = async () => {
    await handleRequest({
      request: async () => {
        const response = await updateSkillLevel({
          level: grade,
          score: score as number,
          skill: query.get("skill") as string,
        });
        return response;
      },
    });
  };

  const handleDownloadPdf = () => {
    if (contentRef.current) {
      html2pdf()
        .from(contentRef.current)
        .set({
          margin: [0.3, 0.3],
          filename: "certificate.pdf",
          html2canvas: { scale: 1, useCORS: true },
          jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
        })
        .save();
    }
  };

  const renderLevel = () => {
    if (percentage >= 85) {
      return <ALevel score={Math.floor(percentage)} />;
    } else if (percentage >= 70 && percentage < 85) {
      return <BLevel score={Math.floor(percentage)} />;
    } else {
      return <CLevel score={Math.floor(percentage)} />;
    }
  };

  useEffect(() => {
    if (user) {
      fetchSkillLevel();
    }
  }, []);

  return (
    <MainCard className="w-[70%] m-auto mt-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7 }}
      >
        {/* <div
          className="w-[100px] h-[100px] rounded-full text-white flex items-center justify-center m-auto mt-6 text-[44px] font-bold leading-[66px] text-center"
          style={{backgroundColor: bgColor}}
        >
          {grade}
        </div> */}
        <div className="w-full flex justify-center items-center">
          {renderLevel()}
        </div>
        <h1 className="text-[32px] font-normal leading-[41.6px] text-center text-[#0C0C0C] mt-[64px]">
          Closer to career goals!
        </h1>
        <div className="flex justify-center pt-4">
          <p className="text-base font-normal leading-6 text-center">
            {t(
              `You have skills for senior roles. Employers in South Korea find you qualified.`
            )}
          </p>
        </div>
        <div className="w-full bg-[#FAFAFA] p-6 rounded-xl mt-[60px]">
          <h3 className="text-base font-semibold leading-6 text-left text-[#0C0C0C]">
            Retake Test
          </h3>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li className="text-base font-normal leading-6 text-left text-[#0C0C0C] w-[95%]">
              Want to try again? Mark your calendar and come back in 1 month to
              retake the test and boost your skills!
            </li>
            <li className="text-base font-normal leading-6 text-left text-[#0C0C0C] w-[95%]">
              Something wrong with this question? Give feedback.
            </li>
          </ul>
        </div>
        <div className="flex justify-between pt-9 items-center">
          <p className="text-base font-normal leading-6 text-center text-[#0C0C0C]">
            {t("Download Your Certificate (PDF)")}
          </p>
          <Button
            onClick={handleDownloadPdf}
            variant="primary"
            className="text-lg font-medium leading-[21.78px] text-center py-[13px] px-[55px]"
          >
            {t("Download")}
          </Button>
        </div>
      </motion.div>
      <div className="w-full hidden absolute top-0">
        <PdfContent
          name={user?.full_name || ""}
          ref={contentRef}
          level={grade}
          skill={query.get("skill") as string}
        />
      </div>
    </MainCard>
  );
};
