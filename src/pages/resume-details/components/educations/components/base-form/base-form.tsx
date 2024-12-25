/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Select, Sheet, TextArea } from "@/components";
import { SearchInput } from "@/components/common/search-input";
import { Form } from "@/components/ui/form";
import {
  useLazyGetAllCountryQuery,
  useLazyGetAllUniversityQuery,
} from "@/features/info";
import {
  useCheckTextAi,
  useHandleRequest,
  useValidationOptions,
} from "@/hooks";
import { SearchIcon } from "@/icons/search";
import { getLastYears } from "@/utils";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Props } from "./types";
import { AiIcon } from "@/icons/ai-icon";
import { Trash } from "@/icons";

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

export const BaseForm = ({
  close,
  open,
  title,
  form,
  onSubmit,
  buttonText,
  loading,
  onDelete,
  deleting,
}: Props) => {
  const useValidationOption = useValidationOptions();
  const handleRequest = useHandleRequest();
  const [
    getUniversities,
    { data: { data: universities = [] } = {}, isFetching },
  ] = useLazyGetAllUniversityQuery();
  const [
    getCountry,
    { data: { data: countries = [] } = {}, isFetching: isFetchingCountry },
  ] = useLazyGetAllCountryQuery();

  const fetchUniversity = async () => {
    await handleRequest({
      request: async () => {
        const response = await getUniversities({
          search: form.watch("university"),
        });
        return response;
      },
    });
  };

  const fetchCountry = async () => {
    await handleRequest({
      request: async () => {
        const response = await getCountry({ search: form.watch("region") });
        return response;
      },
    });
  };

  const { checkTextAi, loading: checkLoading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(form.watch("description") as string);
    form.setValue("description", result?.content);
  };

  useEffect(() => {
    const universityValue = form.watch("university");
    if (universityValue && universityValue.length > 2) {
      fetchUniversity();
    }
  }, [form.watch("university")]);

  useEffect(() => {
    const countryValue = form.watch("region");
    if (countryValue && countryValue.length > 2) {
      fetchCountry();
    }
  }, [form.watch("region")]);

  return (
    <Sheet
      side="right"
      subtitle={"Share where you’ve worked on your profile."}
      open={open}
      title={title}
      className={"min-w-[884px]"}
      onClose={close}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-6 grid-cols-2">
            <Controller
              name="major"
              control={form.control}
              rules={useValidationOption(true, 3, 100)}
              render={({ field }) => (
                <Input
                  type="text"
                  label={"Major"}
                  placeholder={"What is your major?"}
                  onChange={field.onChange}
                  value={field.value}
                  errorMessage={form.formState.errors.major?.message}
                />
              )}
            />
            <div>
              <Controller
                name="university"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <SearchInput
                    isSearching={isFetching}
                    options={universities.map((item: any) => ({
                      value: item.en,
                      label: item.en,
                    }))}
                    label={"University"}
                    placeholder={"Search for company"}
                    onChange={field.onChange}
                    value={field.value}
                    startContent={<SearchIcon />}
                    errorMessage={form.formState.errors.university?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="category"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <Select
                    label={"Category"}
                    placeholder={"Employment"}
                    onChange={field.onChange}
                    value={field.value as string}
                    options={EDUCATION_LEVELS}
                    errorMessage={form.formState.errors.category?.message}
                  />
                )}
              />
            </div>
            <Controller
              name="region"
              control={form.control}
              rules={useValidationOption(true, 3, 100)}
              render={({ field }) => (
                <SearchInput
                  isSearching={isFetchingCountry}
                  label={"Country"}
                  placeholder={"Select region"}
                  onChange={field.onChange}
                  value={field.value}
                  options={countries.map((item) => ({
                    value: item.name,
                    label: item.name,
                  }))}
                  required
                  errorMessage={form.formState.errors.region?.message}
                />
              )}
            />
            <div className="grid  gap-x-[34px] grid-cols-2">
              <div>
                <Controller
                  name="admission_year"
                  control={form.control}
                  rules={useValidationOption(true, 3, 100)}
                  render={({ field }) => (
                    <Select
                      label={"Admission Year"}
                      placeholder={"Select year"}
                      onChange={field.onChange}
                      value={field.value as string}
                      options={
                        getLastYears().map((item) => ({
                          label: item.toString(),
                          value: item.toString(),
                        })) || []
                      }
                      errorMessage={
                        form.formState.errors.admission_year?.message
                      }
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="graduation_year"
                  control={form.control}
                  rules={useValidationOption(true, 3, 100)}
                  render={({ field }) => (
                    <Select
                      label={"Graduation Year"}
                      placeholder={"Select year"}
                      onChange={field.onChange}
                      value={field.value as string}
                      options={
                        getLastYears().map((item) => ({
                          label: item.toString(),
                          value: item.toString(),
                        })) || []
                      }
                      errorMessage={
                        form.formState.errors.graduation_year?.message
                      }
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-span-2">
              <Controller
                name="description"
                control={form.control}
                render={({ field }) => (
                  <TextArea
                    placeholder={
                      "e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
                    }
                    label={"Description"}
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.description?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className="pt-4">
            <Button
              className="ai_button py-2 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.50)]"
              leftIcon={<AiIcon />}
              loading={checkLoading}
              onClick={checkTextHandle}
              size="sm"
            >
              AI Updating
            </Button>
          </div>
          <div className="absolute flex w-full justify-between bottom-5 right-0 px-[30px]">
            {onDelete ? (
              <Button
                onClick={onDelete}
                className="bg-transparent text-[#F13325] hover:bg-transparent"
                leftIcon={<Trash />}
                loading={deleting}
                spinnerColor="#F13325"
              >
                Delete
              </Button>
            ) : (
              <div></div>
            )}
            <div className=" grid grid-cols-2 gap-x-3">
              <Button
                onClick={close}
                className="!py-[13px] px-[68px] "
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="!py-[13px] px-[68px] "
                loading={loading}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Sheet>
  );
};
