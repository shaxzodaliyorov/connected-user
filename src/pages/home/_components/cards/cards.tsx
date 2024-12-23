import { Button } from "@/components/common";
import { ArrowRight } from "@/icons/arrow-right";

export const Cards = () => (
  <section className="w-full pt-[120px]">
    <div className="w-full container flex flex-wrap gap-4">
      <div className="w-[49.2%] bg-white rounded-[15px] p-[30px]">
        <img src="./images/Cup-Coffee.svg" alt="calculate" />
        <div className="pt-[127px]">
          <h4 className="text-[#1289F8] text-[32px] font-medium leading-[38.72px] text-left">
            Become a Candidate
          </h4>
          <p className="w-[80%]">
            Join our team! We're looking for passionate individuals to
            collaborate and grow. Ready to take the next step? We want to hear
            from you!
          </p>
          <div className="pt-6">
            <Button
              variant="primary"
              className="text-[#fff]"
              rightIcon={<ArrowRight />}
              onClick={() => open("https://company.urconnection.co.kr/sign-up")}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[49.2%] bg-white rounded-[15px] p-[30px]">
        <img src="./images/candidate.svg" alt="" />
      </div>
      <div className="w-[49.2%] bg-white rounded-[15px] p-[30px]">
        <img src="./images/Become.svg" alt="" />
      </div>
      <div className="w-[49.2%] bg-white rounded-[15px] p-[30px]">
        <img src="./images/Streamline-Retro.svg" alt="calculate" />
        <div className="pt-[127px]">
          <h4 className="text-[#1289F8] text-[32px] font-medium leading-[38.72px] text-left">
            Become an Employers
          </h4>
          <p className="w-[80%]">
            Join our team! We're looking for passionate professionals ready to
            advance their careers. Let's connect!
          </p>
          <div className="pt-6">
            <Button
              onClick={() => open("https://user.urconnection.co.kr/register")}
              variant="primary"
              className="text-[#fff]"
              rightIcon={<ArrowRight />}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
