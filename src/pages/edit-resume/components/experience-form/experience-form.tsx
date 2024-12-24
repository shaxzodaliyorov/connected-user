/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Props } from "./types";
import { Controller } from "react-hook-form";
import { Button, DatePicker, Input, Select, TextArea } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import { AiIcon } from "@/icons/ai-icon";
import { Trash } from "@/icons";
import { useCheckTextAi, useValidationOptions } from "@/hooks";

const EMPLOYMENT_TYPES = [
  { label: "Full-time", value: "Full-time" },
  { label: "Part-time", value: "Part-time" },
  { label: "Remote", value: "Remote" },
  { label: "Internship", value: "Internship" },
  { label: "Freelance", value: "Freelance" },
];

export const ExperienceForm = ({ fields, form, index, remove }: Props) => {
  const getFieldName = useCallback(
    (name: string) => `experience.${index}.${name}`,
    [index]
  );
  const { t } = useTranslation();
  const validationOptions = useValidationOptions();

  const { checkTextAi, loading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(
      form.getValues(getFieldName("description"))
    );
    form.setValue(getFieldName("description"), result?.content);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">
          Edit experience
        </h1>
        {fields.length > 1 && (
          <button
            onClick={remove}
            className="flex items-center gap-x-2 text-center text-[#f13225] text-lg font-medium font-['Inter Display']"
          >
            <Trash /> Delete
          </button>
        )}
      </div>
      <p className="text-neutral-500 mt-3 text-base font-normal font-['Inter Display'] leading-normal">
        Share where you’ve worked on your profile.
      </p>
      <div className="w-full pt-6 gap-6 grid grid-cols-2">
        <Controller
          name={getFieldName("title")}
          control={form.control}
          rules={validationOptions(true)}
          render={({ field }) => (
            <Input
              placeholder="What is your title?"
              label="Title"
              onChange={field.onChange}
              value={field.value}
              errorMessage={
                ((
                  form.formState.errors?.experience?.[
                    index as unknown as keyof typeof form.formState.errors.experience
                  ] as any
                )?.title?.message ?? "") as any
              }
            />
          )}
        />
        <Controller
          name={getFieldName("company")}
          control={form.control}
          rules={validationOptions(true)}
          render={({ field }) => (
            <Input
              placeholder="Search for company"
              label="Company"
              errorMessage={
                ((
                  form.formState.errors?.experience?.[
                    index as unknown as keyof typeof form.formState.errors.experience
                  ] as any
                )?.company?.message ?? "") as any
              }
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <Controller
          name={getFieldName("website")}
          control={form.control}
          render={({ field }) => (
            <Input
              leftElement={
                <div className="border-r px-4 h-full flex items-center justify-center">
                  <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display']">
                    https://
                  </p>
                </div>
              }
              placeholder="www.example.com"
              label="Website"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <Controller
          name={getFieldName("location")}
          rules={validationOptions(true)}
          control={form.control}
          render={({ field }) => (
            <Input
              placeholder="Search for city"
              label="Location"
              onChange={field.onChange}
              value={field.value}
              errorMessage={
                ((
                  form.formState.errors?.experience?.[
                    index as unknown as keyof typeof form.formState.errors.experience
                  ] as any
                )?.location?.message ?? "") as any
              }
            />
          )}
        />
        <Controller
          name={getFieldName("employment_type")}
          control={form.control}
          rules={validationOptions(true)}
          render={({ field }) => (
            <Select
              options={EMPLOYMENT_TYPES}
              placeholder="Full time"
              label="Employment"
              onChange={field.onChange}
              value={field.value}
              errorMessage={
                ((
                  form.formState.errors?.experience?.[
                    index as unknown as keyof typeof form.formState.errors.experience
                  ] as any
                )?.employment_type?.message ?? "") as any
              }
            />
          )}
        />
        <div className="grid gap-x-5 grid-cols-2">
          <Controller
            name={getFieldName("joining_year")}
            control={form.control}
            rules={validationOptions(true)}
            render={({ field }) => (
              <DatePicker
                errorMessage={
                  ((
                    form.formState.errors?.experience?.[
                      index as unknown as keyof typeof form.formState.errors.experience
                    ] as any
                  )?.joining_year?.message ?? "") as any
                }
                label="Joining Year"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            name={getFieldName("retirement_year")}
            control={form.control}
            rules={validationOptions(true)}
            render={({ field }) => (
              <DatePicker
                errorMessage={
                  ((
                    form.formState.errors?.experience?.[
                      index as unknown as keyof typeof form.formState.errors.experience
                    ] as any
                  )?.retirement_year?.message ?? "") as any
                }
                label="Retirement Year"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        </div>
        <div />
        <div>
          <Controller
            name={getFieldName("still_working")}
            control={form.control}
            render={({ field }) => (
              <label className="flex select-none cursor-pointer items-center gap-x-2">
                <Checkbox
                  className="w-5 h-5 shadow-none border-[#D6DDEB] data-[state=checked]:border-[#0062ff] data-[state=checked]:bg-[#0062ff]"
                  onCheckedChange={field.onChange}
                  checked={field.value}
                />
                <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-tight">
                  {t("still working")}
                </p>
              </label>
            )}
          />
        </div>
        <div className="col-span-2">
          <Controller
            control={form.control}
            name={getFieldName("description")}
            render={({ field }) => (
              <TextArea
                label="Description"
                placeholder="I joined Stripe’s Customer Success team to scale their checkout product, focusing on onboarding new customers and resolving issues."
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <div className="pt-4">
            <Button
              className="ai_button py-2 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.50)]"
              leftIcon={<AiIcon />}
              onClick={checkTextHandle}
              loading={loading}
            >
              AI Updating
            </Button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
    </div>
  );
};
