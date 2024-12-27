import { useManageQuery } from "@/hooks";
import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Congratulations, Start, Test } from "./components";
import { Quiz } from "./components/test/types";

export const SkillTestPage = () => {
  const { getQuery } = useManageQuery();
  const [score, setScore] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<Quiz[]>([]);

  console.log(quiz);

  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6">
          <Link
            to="/skill-level-test/test?testSetup=start"
            className="flex items-center gap-x-2"
          >
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
          <div className="">
            {getQuery("testSetup") === "start" && <Start />}
            {getQuery("testSetup") === "test" && (
              <Test
                quiz={quiz}
                setQuiz={setQuiz}
                setScore={setScore}
                score={score}
              />
            )}
            {getQuery("testSetup") === "congratulations" && (
              <Congratulations score={score} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
