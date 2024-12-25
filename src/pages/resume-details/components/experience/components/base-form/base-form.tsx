import { Button, Input, Select, Sheet, TextArea } from "@/components";
import { Props } from "./types";
import { useCheckTextAi, useValidationOptions } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Form } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { SearchIcon } from "@/icons/search";
import { getLastYears } from "@/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "@/icons";
import { AiIcon } from "@/icons/ai-icon";

const EMPLOYMENT_TYPES = [
  { label: "Full-time", value: "Full-time" },
  { label: "Part-time", value: "Part-time" },
  { label: "Remote", value: "Remote" },
  { label: "Internship", value: "Internship" },
  { label: "Freelance", value: "Freelance" },
];

export const BaseForm = ({
  close,
  open,
  title,
  form,
  onSubmit,
  buttonText,
  loading,
  deleting,
  onDelete,
}: Props) => {
  const useValidationOption = useValidationOptions();
  const { t } = useTranslation();

  const { checkTextAi, loading: checkLoading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(form.watch("description") as string);
    form.setValue("description", result?.content);
  };

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
          <div className="grid overflow-y-auto gap-6 grid-cols-2">
            <Controller
              name="title"
              control={form.control}
              rules={useValidationOption(true, 3, 100)}
              render={({ field }) => (
                <Input
                  type="text"
                  label={t("Title")}
                  placeholder={t("What is your title?")}
                  onChange={field.onChange}
                  value={field.value}
                  errorMessage={form.formState.errors.title?.message}
                />
              )}
            />
            <div>
              <Controller
                name="company"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <Input
                    type="text"
                    label={t("Company")}
                    placeholder={t("Search for company")}
                    onChange={field.onChange}
                    value={field.value}
                    leftIcon={<SearchIcon />}
                    errorMessage={form.formState.errors.company?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="website"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <Input
                    type="text"
                    label={t("Website")}
                    placeholder="www.example.com"
                    leftElement={
                      <div className="pr-3 h-full flex justify-center items-center pl-[14px] border-r border-r-[#D0D5DD]">
                        <p className="text-base font-normal lg:leading-6 text-left text-[#7C8493]">
                          https://
                        </p>
                      </div>
                    }
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.website?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="location"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <Input
                    type="text"
                    label={t("Location")}
                    placeholder={t("Search for city")}
                    onChange={field.onChange}
                    value={field.value}
                    leftIcon={<SearchIcon />}
                    errorMessage={form.formState.errors.location?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="employment_type"
                control={form.control}
                rules={useValidationOption(true, 3, 100)}
                render={({ field }) => (
                  <Select
                    label={t("Employment type")}
                    placeholder={t("Employment")}
                    onChange={field.onChange}
                    value={field.value as string}
                    options={EMPLOYMENT_TYPES}
                    errorMessage={
                      form.formState.errors.employment_type?.message
                    }
                  />
                )}
              />
            </div>
            <div className="grid gap-x-5 grid-cols-2">
              <Controller
                name={"joining_year"}
                render={({ field }) => (
                  <Select
                    label={t("Join year")}
                    options={
                      getLastYears().map((item: number) => ({
                        label: item.toString(),
                        value: item.toString(),
                      })) || []
                    }
                    placeholder="Select join year "
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.joining_year?.message}
                  />
                )}
              />
              <Controller
                name={"retirement_year"}
                render={({ field }) => (
                  <Select
                    label={t("Retirement year")}
                    options={
                      getLastYears().map((item) => ({
                        label: item.toString(),
                        value: item.toString(),
                      })) || []
                    }
                    placeholder={t("Select retirement year")}
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={
                      form.formState.errors.retirement_year?.message
                    }
                  />
                )}
              />
            </div>
            <div></div>
            <div className="flex justify-start">
              <Controller
                name="still_working"
                control={form.control}
                render={({ field }) => (
                  <label className="flex select-none cursor-pointer items-center gap-x-4">
                    <Checkbox
                      className="w-[22px] h-[22px] data-[state=checked]:bg-[#6E86FF] data-[state=checked]:border-[#6E86FF]"
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                    <p className="text-base font-medium leading-[25.6px] text-left">
                      {t("still working")}
                    </p>
                  </label>
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="description"
                control={form.control}
                render={({ field }) => (
                  <TextArea
                    placeholder="I joined Stripe’s Customer Success team to scale their checkout product, focusing on onboarding new customers and resolving issues."
                    label={t("Description")}
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
          <div className=" pt-[37px] flex w-full justify-between bottom-5 right-0 px-[30px]">
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
              <Button onClick={close} className="py-[13px]" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="py-[13px]" loading={loading}>
                {buttonText}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Sheet>
  );
};
