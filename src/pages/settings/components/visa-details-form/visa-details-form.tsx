import { Button, DatePicker, Select } from "@/components/common";
import { Controller, useForm } from "react-hook-form";
import { AccountFormValues } from "../account-form/types";
import { VISA } from "@/constants/visa";
import { useGetUser, useHandleRequest, useValidationOptions } from "@/hooks";
import { useUpdateUserProfileMutation } from "@/features/user";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const VisaDetailsForm = () => {
  const form = useForm<AccountFormValues>();
  const handleRequest = useHandleRequest();
  const validationOptions = useValidationOptions();
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const user = useGetUser();
  const { t } = useTranslation();

  const onSubmit = async (formData: AccountFormValues) => {
    await handleRequest({
      request: async () => {
        const response = await updateUserProfile(formData);
        return response;
      },
      onSuccess: () => {
        toast({ title: t("Update successfully"), variant: "default" });
      },
    });
  };

  useEffect(() => {
    if (user) {
      form.setValue("visa_issue_date", user?.visa_issue_date || "");
      form.setValue("visa_final_entry_date", user?.visa_final_entry_date);
      form.setValue("current_visa", user?.current_visa || "");
    }
  }, [form, user]);

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex  ">
        <div className="w-full">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 ">
              <Controller
                name="current_visa"
                control={form.control}
                rules={validationOptions(true)}
                render={({ field }) => (
                  <Select
                    label="Current visa"
                    value={field.value as string}
                    onChange={field.onChange}
                    options={VISA}
                    placeholder="Select your visa type"
                    size="md"
                    fullWidth
                    errorMessage={form.formState.errors.current_visa?.message}
                  />
                )}
              />

              <Controller
                name="visa_issue_date"
                control={form.control}
                rules={validationOptions(true)}
                render={({ field }) => (
                  <DatePicker
                    onChange={field.onChange}
                    value={field.value}
                    label="Issue Date"
                    errorMessage={
                      form.formState.errors.visa_issue_date?.message
                    }
                  />
                )}
              />
              <Controller
                name="visa_final_entry_date"
                control={form.control}
                rules={validationOptions(true)}
                render={({ field }) => (
                  <DatePicker
                    onChange={field.onChange}
                    value={field.value}
                    label="Final Entry Date"
                    errorMessage={
                      form.formState.errors.visa_final_entry_date?.message
                    }
                  />
                )}
              />
            </div>
            <div className="pt-10">
              <div className="w-full h-[1px] bg-[#D9D9D9]" />
            </div>
            <div className="flex justify-end pt-[30px]">
              <Button
                loading={isLoading}
                type="submit"
                className="px-[76px] h-12"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
