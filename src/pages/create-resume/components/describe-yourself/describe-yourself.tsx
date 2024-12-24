import { FC } from "react";
import { Props } from "./types";
import { Controller } from "react-hook-form";
import { Button, TextArea } from "@/components";
import { AiIcon } from "@/icons/ai-icon";
import { useCheckTextAi } from "@/hooks";

export const DescribeYourself: FC<Props> = ({ form }) => {
  const { checkTextAi, loading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(form.getValues("about_me"));
    form.setValue("about_me", result?.content);
  };

  return (
    <div>
      <h1 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">
        Describe yourself
      </h1>
      <div className="pt-[23px]">
        <Controller
          control={form.control}
          name="about_me"
          render={({ field }) => (
            <TextArea
              label="About Me"
              placeholder="Create a short introduction that resonates with you! If you're struggling, consider using AI for help!"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <div className="pt-4">
          <Button
            className="ai_button py-2 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.50)]"
            leftIcon={<AiIcon />}
            loading={loading}
            onClick={checkTextHandle}
          >
            AI Updating
          </Button>
        </div>
        <div className="py-10">
          <div className="w-full h-px bg-neutral-100" />
        </div>
      </div>
    </div>
  );
};
