/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useCallback, useEffect } from "react";
import { Props } from "./types";
import {
  useLazyGetAllCountryQuery,
  useLazyGetAllUniversityQuery,
} from "@/features/info";
import {
  useCheckTextAi,
  useHandleRequest,
  useValidationOptions,
} from "@/hooks";
import { useTranslation } from "react-i18next";
import { Trash } from "@/icons";
import { Controller } from "react-hook-form";
import { Button, Input, Select, TextArea } from "@/components";
import { SearchIcon } from "@/icons/search";
import { SearchInput } from "@/components/common/search-input";
import { getLastYears } from "@/utils";
import { AiIcon } from "@/icons/ai-icon";

export const EDUCATION_LEVELS = [
  {
    label: "Bachelor’s Degree (4 years)",
    value: "Bachelor’s Degree (4 years)",
  },
  { label: "Associate Degree (2 years)", value: "Associate Degree (2 years)" },
  { label: "Master’s Degree (2 years)", value: "Master’s Degree (2 years)" },
  { label: "PhD Degree", value: "PhD Degree" },
  { label: "High School Diploma", value: "High School Diploma" },
  { label: "Other", value: "Other" },
];

export const EducationForm: FC<Props> = ({ form, fields, index, remove }) => {
  const [
    getUniversity,
    { data: { data: universities = [] } = {}, isFetching },
  ] = useLazyGetAllUniversityQuery();
  const [
    getCountry,
    { data: { data: countries = [] } = {}, isFetching: isFetchCountry },
  ] = useLazyGetAllCountryQuery();
  const getFieldName = useCallback(
    (name: string) => `education.${index}.${name}`,
    [index]
  );
  const handleRequest = useHandleRequest();
  const validationOptions = useValidationOptions();
  const { t } = useTranslation();

  const { checkTextAi, loading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(
      form.getValues(getFieldName("description"))
    );
    form.setValue(getFieldName("description"), result?.content);
  };

  const fetchUniversities = async () => {
    await handleRequest({
      request: async () => {
        const response = await getUniversity({
          search: form.watch(getFieldName("university")),
        });
        return response;
      },
    });
  };

  const fetchCountry = async () => {
    await handleRequest({
      request: async () => {
        const response = await getCountry({
          search: form.watch(getFieldName("region")),
        });
        return response;
      },
    });
  };

  useEffect(() => {
    if (
      form.watch(getFieldName("university")) &&
      form.watch(getFieldName("university")).length > 2
    ) {
      fetchUniversities();
    }
  }, [form.watch(getFieldName("university"))]);

  useEffect(() => {
    if (
      form.watch(getFieldName("region")) &&
      form.watch(getFieldName("region")).length > 2
    ) {
      fetchCountry();
    }
  }, [form.watch(getFieldName("region"))]);

  return (
    <div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">
          Add Education
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
        Share where you’ve educated on your profile.
      </p>
      <div className="grid pt-8 gap-6 grid-cols-2">
        <Controller
          name={getFieldName("major")}
          control={form.control}
          rules={validationOptions(true)}
          render={({ field }) => (
            <Input
              errorMessage={
                ((
                  form.formState.errors?.education?.[
                    index as unknown as keyof typeof form.formState.errors.education
                  ] as any
                )?.major?.message ?? "") as any
              }
              placeholder="What is your major?"
              onChange={field.onChange}
              value={field.value}
              label={t("Major")}
            />
          )}
        />
        <Controller
          name={getFieldName("university")}
          rules={validationOptions(true)}
          control={form.control}
          render={({ field }) => (
            <SearchInput
              options={universities.map((item) => ({
                label: item.en,
                value: item.en,
              }))}
              errorMessage={
                ((
                  form.formState.errors?.education?.[
                    index as unknown as keyof typeof form.formState.errors.education
                  ] as any
                )?.university?.message ?? "") as any
              }
              isSearching={isFetching}
              leftIcon={<SearchIcon />}
              placeholder="Search"
              onChange={field.onChange}
              value={field.value}
              label={t("University")}
            />
          )}
        />
        <Controller
          name={getFieldName("category")}
          control={form.control}
          rules={validationOptions(true)}
          render={({ field }) => (
            <Select
              errorMessage={
                ((
                  form.formState.errors?.education?.[
                    index as unknown as keyof typeof form.formState.errors.education
                  ] as any
                )?.category?.message ?? "") as any
              }
              options={EDUCATION_LEVELS}
              placeholder="Bachelor (4 years)"
              onChange={field.onChange}
              value={field.value}
              label={t("Category")}
            />
          )}
        />
        <Controller
          name={getFieldName("region")}
          rules={validationOptions(true)}
          control={form.control}
          render={({ field }) => (
            <SearchInput
              options={countries?.map((country) => ({
                label: country.name,
                value: country.name,
              }))}
              errorMessage={
                ((
                  form.formState.errors?.education?.[
                    index as unknown as keyof typeof form.formState.errors.education
                  ] as any
                )?.region?.message ?? "") as any
              }
              isSearching={isFetchCountry}
              leftIcon={<SearchIcon />}
              placeholder="Search"
              onChange={field.onChange}
              value={field.value}
              label={t("Country")}
            />
          )}
        />
        <div className="grid gap-x-[30px] grid-cols-2">
          <Controller
            name={getFieldName("admission_year")}
            rules={validationOptions(true)}
            control={form.control}
            render={({ field }) => (
              <Select
                options={
                  getLastYears().map((item) => ({
                    label: item.toString(),
                    value: item.toString(),
                  })) || []
                }
                errorMessage={
                  ((
                    form.formState.errors?.education?.[
                      index as unknown as keyof typeof form.formState.errors.education
                    ] as any
                  )?.admission_year?.message ?? "") as any
                }
                placeholder="2000"
                onChange={field.onChange}
                value={field.value}
                label={t("Admission Year")}
              />
            )}
          />
          <Controller
            name={getFieldName("graduation_year")}
            control={form.control}
            rules={validationOptions(true)}
            render={({ field }) => (
              <Select
                options={
                  getLastYears().map((item) => ({
                    label: item.toString(),
                    value: item.toString(),
                  })) || []
                }
                errorMessage={
                  ((
                    form.formState.errors?.education?.[
                      index as unknown as keyof typeof form.formState.errors.education
                    ] as any
                  )?.graduation_year?.message ?? "") as any
                }
                placeholder="2000"
                onChange={field.onChange}
                value={field.value}
                label={t("Graduation Year")}
              />
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
              onClick={checkTextHandle}
              loading={loading}
              className="ai_button py-2 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.50)]"
              leftIcon={<AiIcon />}
            >
              AI Updating
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
