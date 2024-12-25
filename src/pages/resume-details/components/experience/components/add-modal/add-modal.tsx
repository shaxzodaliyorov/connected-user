/* eslint-disable no-unsafe-optional-chaining */
import { useForm } from "react-hook-form";
import { BaseForm } from "../base-form";
import { useHandleRequest } from "@/hooks";
import { useUpdateResumeMutation } from "@/features/resume/resume";
import { useParams } from "react-router-dom";
import { Experience } from "@/types/resume";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { Props } from "./types";

export const AddModal = ({ close, open, resume }: Props) => {
  const form = useForm<Partial<Experience>>();
  const handleRequest = useHandleRequest();
  const [updateResume, { isLoading }] = useUpdateResumeMutation();
  const { id } = useParams();

  const { t } = useTranslation();

  const onSubmit = async (formData: Experience) => {
    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: {
            ...resume,
            experience: [...resume?.experience, { ...formData }],
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
      form={form}
      onSubmit={onSubmit}
      title={t("Add experience")}
      open={open}
      close={close}
      buttonText={t("Save")}
    />
  );
};
