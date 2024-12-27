import { FC } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { ApplyModalProps } from "./types";
import { useGetAllMyResumeQuery } from "@/features/resume/resume";
import { useApplyJobMutation } from "@/features/jobs";
import { useHandleRequest } from "@/hooks";
import { Controller, useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import { CloseIcon } from "@/icons/close";
import { Button, Select } from "../common";
import { PlusIcon } from "@/icons/plus";
import { useNavigate } from "react-router-dom";

export const ApplyModal: FC<ApplyModalProps> = ({ open, onClose, job_id }) => {
  const { data: { data: resumes } = {} } = useGetAllMyResumeQuery("");
  const [applyForJob, { isLoading: isApplying }] = useApplyJobMutation();
  const handleRequest = useHandleRequest();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: { resume: "" },
  });

  const navigate = useNavigate();

  const onSubmit = async (formData: { resume: string }) => {
    if (!formData.resume) {
      setError("resume", { message: "Please select your resume" });
      return;
    }

    await handleRequest({
      request: async () => {
        const response = await applyForJob({
          job_id,
          resume_id: formData.resume,
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: "Applied successfully", variant: "default" });
        onClose();
      },
      onError: () => {
        onClose();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[460px]  bg-white rounded-[15px] shadow-[0px_7px_50px_0px_rgba(0,0,0,0.15)] border">
        <div className="w-full flex items-center justify-between">
          <p className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">
            Apply
          </p>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              control={control}
              name="resume"
              rules={{ required: "Please select your resume" }}
              render={({ field }) => (
                <Select
                  label="Resume"
                  options={
                    resumes?.map((item) => ({
                      label: item?.position,
                      value: item?._id,
                    })) || []
                  }
                  placeholder="Select your resume"
                  onChange={field.onChange}
                  value={field.value}
                  errorMessage={errors.resume?.message}
                />
              )}
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => navigate("/add-resume")}
              className="flex text-[#0062FF]  items-center gap-x-2"
            >
              <PlusIcon /> Add resume
            </button>
          </div>
          <div className="pt-8">
            <Button
              loading={isApplying}
              type="submit"
              fullWidth
              className="py-[13px]"
            >
              Apply
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
