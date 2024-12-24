import { FC, useEffect } from "react";
import { Props } from "./types";
import { Controller } from "react-hook-form";
import { SearchInput } from "@/components/common/search-input";
import { useLazyGetAllNationalityQuery } from "@/features/info";
import { useHandleRequest, useValidationOptions } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Select } from "@/components";

export const JOB_TYPES = [
  { label: "Full-time", value: "Full-time" },
  { label: "Part-time", value: "Part-time" },
  { label: "Remote", value: "Remote" },
  { label: "Internship", value: "Internship" },
  { label: "Freelance", value: "Freelance" },
];

export const EXPERIENCE_LEVELS = [
  { label: "No experience", value: "No experience" },
  { label: "1-2 years", value: "1-2 years" },
  { label: "3-4 years", value: "3-4 years" },
  { label: "5-6 years", value: "5-6 years" },
  { label: "7-8 years", value: "7-8 years" },
  { label: "9-10 years", value: "9-10 years" },
  { label: "10 years ∼", value: "10 years ∼" },
];

export const SALARY_RANGES = [
  { label: "1.000.000 ₩ - 2.000.000 ₩", value: "1.000.000 ₩ - 2.000.000 ₩" },
  { label: "2.500.000 ₩ - 3.000.000 ₩", value: "2.500.000 ₩ - 3.000.000 ₩" },
  { label: "3.500.000 ₩ - 4.500.000 ₩", value: "3.500.000 ₩ - 4.500.000 ₩" },
  { label: "5.000.000 ₩ ∼", value: "5.000.000 ₩ ∼" },
  { label: "By contract", value: "By contract" },
];

export const AdditionalDetails: FC<Props> = ({ form }) => {
  const [
    getAllNationality,
    {
      data: { data: nationalities = [] } = {},
      isFetching: nationalityFetching,
    },
  ] = useLazyGetAllNationalityQuery();

  const validationOptions = useValidationOptions();
  const { t } = useTranslation();

  const handleRequest = useHandleRequest();

  const fetchAllNationality = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllNationality({
          search: form.watch("nationality"),
        }).unwrap();
        return response;
      },
    });
  };

  useEffect(() => {
    if (form.watch("nationality") && form.watch("nationality")?.length > 2) {
      fetchAllNationality();
    }
  }, [form.watch("nationality")]);

  return (
    <div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
      <div className="pb-6">
        <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
          Additional Details
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-2">
        <Controller
          control={form.control}
          rules={validationOptions(true)}
          name="nationality"
          render={({ field }) => (
            <SearchInput
              isSearching={nationalityFetching}
              options={nationalities?.map((item) => ({
                label: t(item.name),
                value: item.name,
              }))}
              errorMessage={form.formState.errors.country?.message}
              placeholder="Select a nationality"
              label="Nationality"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <div className="grid gap-6 grid-cols-2">
          <Controller
            control={form.control}
            rules={validationOptions(true)}
            name="employee_type"
            render={({ field }) => (
              <Select
                options={JOB_TYPES.map((item) => ({
                  label: t(item.value),
                  value: item.value,
                }))}
                errorMessage={form.formState.errors.employee_type?.message}
                placeholder="Type of work"
                label="Employee type"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            control={form.control}
            rules={validationOptions(true)}
            name="working_experience"
            render={({ field }) => (
              <Select
                options={EXPERIENCE_LEVELS.map((item) => ({
                  label: t(item.label),
                  value: item.value,
                }))}
                errorMessage={form.formState.errors.working_experience?.message}
                placeholder="Select year"
                label="Working Experience"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        </div>
        <div className="col-span-2">
          <Controller
            control={form.control}
            name="expected_salary"
            rules={validationOptions(true)}
            render={({ field }) => (
              <Select
                options={SALARY_RANGES}
                placeholder={t("Select year")}
                errorMessage={form.formState.errors.expected_salary?.message}
                onChange={field.onChange}
                value={field.value}
                label={t("Expected Salary")}
              />
            )}
          />
        </div>
      </div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
    </div>
  );
};
