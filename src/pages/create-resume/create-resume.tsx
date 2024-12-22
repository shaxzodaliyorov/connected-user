/* eslint-disable @typescript-eslint/no-explicit-any */
import { MainCard } from "@/components/main-card";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AddResumeFormValues } from "./types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  AddEducation,
  AddExperience,
  AdditionalDetails,
  AddSkill,
  DescribeYourself,
  PersonalDetails,
  SocialLinks,
} from "./components";
import { Button } from "@/components";
import { useFileUpload, useHandleRequest } from "@/hooks";
import dayjs from "dayjs";
import { useAddResumeMutation } from "@/features/resume/resume";
import { toast } from "@/components/ui/use-toast";

export const CreateResume = () => {
  const form = useForm<AddResumeFormValues>({
    defaultValues: {
      education: [
        {
          admission_year: "",
          category: "",
          description: "",
          graduation_year: "",
          major: "",
          region: "",
          university: "",
        },
      ],
      experience: [
        {
          company: "",
          description: "",
          employment_type: "",
          joining_year: "",
          location: "",
          retirement_year: "",
          still_working: false,
          title: "",
          website: "",
        },
      ],
      languages: [{ id: Date.now(), title: "", level: "" }],
    },
  });
  const [addResume, { isLoading }] = useAddResumeMutation();

  const navigate = useNavigate();
  const { handleFileUpload, isLoading: uploading } = useFileUpload();
  const handleRequest = useHandleRequest();

  const onSubmit: SubmitHandler<AddResumeFormValues> = async (formData) => {
    formData.date_of_birth = dayjs(formData.date_of_birth).format("YYYY-MM-DD");
    formData.photo = await handleFileUpload(formData.photo as File);
    formData.experience = formData.experience.map((item) => ({
      ...item,
      still_working: Boolean(item.still_working),
    }));
    formData.languages = formData.languages.map((item) => ({
      level: item.level,
      title: item.language,
    })) as any[];

    await handleRequest({
      request: async () => {
        const response = await addResume(formData);
        return response;
      },
      onSuccess: () => {
        navigate("/my-resume");
        toast({ title: "Resume created", variant: "default" });
      },
    });
  };

  return (
    <section>
      <div className="py-6 container ">
        <Link to="/dashboard" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <MainCard className="max-w-[884px] overflow-visible m-auto bg-white ">
        <h1 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">
          Basic Information
        </h1>
        <p className="text-neutral-500 mt-3 text-base font-normal font-['Inter Display'] leading-normal">
          This is your personal information that you can update anytime.
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <PersonalDetails form={form} />
              <AdditionalDetails form={form} />
              <Controller
                control={form.control}
                name="social_links"
                render={({ field }) => (
                  <SocialLinks onChange={field.onChange} value={field.value} />
                )}
              />
              <DescribeYourself form={form} />
              <AddExperience form={form} />
              <AddEducation form={form} />
              <AddSkill form={form} />
              <div className="flex justify-end">
                <Button
                  loading={isLoading || uploading}
                  className="px-[78px] py-[13px]"
                  type="submit"
                  size="sm"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </MainCard>
    </section>
  );
};
