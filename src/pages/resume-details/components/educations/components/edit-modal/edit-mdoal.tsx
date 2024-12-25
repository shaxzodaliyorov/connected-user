import { useForm } from "react-hook-form";
import { BaseForm } from "../base-form";
import { Education } from "@/types/resume";
import { useHandleRequest } from "@/hooks";
import { useUpdateResumeMutation } from "@/features/resume/resume";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { Props } from "./types";

export const EditModal = ({ close, open, education, resume }: Props) => {
  const form = useForm<Partial<Education>>();
  const { t } = useTranslation();
  const handleRequest = useHandleRequest();
  const [updateResume, { isLoading }] = useUpdateResumeMutation();
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false);

  const onSubmit = async (formData: Education) => {
    const educationData = [...resume.education];

    educationData.forEach((exp, index) => {
      if (exp._id === education._id) {
        educationData[index] = formData;
      }
    });

    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: { ...resume, education: educationData },
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
    const educationData = resume.education.filter(
      (exp) => exp._id !== education._id
    );

    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: { ...resume, education: educationData },
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Successfully deleted"), variant: "default" });
        close();
        form.reset();
        setIsDelete(false);
      },
    });
  };

  useEffect(() => {
    form.setValue("admission_year", education.admission_year);
    form.setValue("category", education.category);
    form.setValue("description", education.description);
    form.setValue("major", education.major);
    form.setValue("university", education.university);
    form.setValue("graduation_year", education.graduation_year);
    form.setValue("region", education.region);
    return () => {
      setIsDelete(false);
    };
  }, [education, form]);

  return (
    <BaseForm
      loading={!isDelete && isLoading}
      deleting={isDelete && isLoading}
      form={form}
      onSubmit={onSubmit}
      title={t("Edit Education")}
      buttonText={t("Update")}
      open={open}
      close={close}
      onDelete={onDelete}
    />
  );
};
