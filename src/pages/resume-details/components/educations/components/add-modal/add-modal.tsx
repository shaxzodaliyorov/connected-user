import { BaseForm } from "../base-form";
import { Education } from "@/types/resume";
import { useHandleRequest } from "@/hooks";
import { useUpdateResumeMutation } from "@/features/resume/resume";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Props } from "./types";
import { toast } from "@/components/ui/use-toast";

export const AddModal = ({ close, open, resume }: Props) => {
  const form = useForm<Partial<Education>>();

  const handleRequest = useHandleRequest();
  const [updateResume, { isLoading }] = useUpdateResumeMutation();
  const { id } = useParams();
  const { t } = useTranslation();

  const onSubmit = async (formData: Education) => {
    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: {
            ...resume,
            education: [...resume.education, { ...formData }],
          },
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Successfully added"), variant: "default" });
        close();
        form.reset();
      },
    });
  };

  return (
    <BaseForm
      loading={isLoading}
      title="Add Education"
      form={form}
      open={open}
      close={close}
      onSubmit={onSubmit}
      buttonText="Save"
    />
  );
};
