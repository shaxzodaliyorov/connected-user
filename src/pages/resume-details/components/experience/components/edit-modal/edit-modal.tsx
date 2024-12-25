import { useForm } from "react-hook-form";
import { BaseForm } from "../base-form";
import { useEffect, useState } from "react";
import { Experience } from "@/types/resume";
import { useHandleRequest } from "@/hooks";
import { useUpdateResumeMutation } from "@/features/resume/resume";
import { useParams } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { Props } from "./types";

export const EditModal = ({ close, open, experience, resume }: Props) => {
  const form = useForm<Partial<Experience>>();

  const handleRequest = useHandleRequest();
  const [updateResume, { isLoading }] = useUpdateResumeMutation();
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false);

  const { t } = useTranslation();

  const onSubmit = async (formData: Experience) => {
    const experienceData = [...resume.experience];

    experienceData.forEach((exp, index) => {
      if (exp._id === experience._id) {
        experienceData[index] = formData;
      }
    });

    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: { ...resume, experience: experienceData },
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Successfully updated"), variant: "default" });
        close();
        form.reset();
      },
    });
  };

  const onDelete = async () => {
    setIsDelete(true);

    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: {
            ...resume,
            experience: resume.experience.filter(
              (exp) => exp._id !== experience._id
            ),
          },
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Successfully deleted"), variant: "default" });
        close();
        form.reset();
      },
    });
  };

  useEffect(() => {
    form.setValue("title", experience.title);
    form.setValue("company", experience.company);
    form.setValue("description", experience.description);
    form.setValue("joining_year", experience.joining_year);
    form.setValue("retirement_year", experience.retirement_year);
    form.setValue("still_working", experience.still_working);
    form.setValue("website", experience.website);
    form.setValue("location", experience.website);
    form.setValue("employment_type", experience.employment_type);
  }, [experience, form]);

  return (
    <BaseForm
      loading={!isDelete && isLoading}
      form={form}
      onDelete={onDelete}
      deleting={isDelete && isLoading}
      onSubmit={onSubmit}
      title={t("Edit experience")}
      buttonText={t("Update")}
      open={open}
      close={close}
    />
  );
};
