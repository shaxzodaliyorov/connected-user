/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, DatePicker, Input, Select } from "@/components";
import { MainCard } from "@/components/main-card";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { FormValue } from "./types";
import { useHandleRequest, useValidationOptions } from "@/hooks";
import { RadioList } from "./components/radio-list";
import { useSetVisaHelpMutation } from "@/features/user";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const EDUCATIONAL = [
  { value: "0", label: "No, I didn't graduate" },
  { value: "1", label: "Master" },
  { value: "2", label: "Bachelor" },
  { value: "3", label: "PhD" },
];

const KIIP = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const TOPIK = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];

const VIOLATIONS = [
  { value: "y", label: "Yes, I have " },
  { value: "n", label: "No immigration violations." },
];

const VISA = [
  { label: "D-4", value: "D-4" },
  { label: "D-2", value: "D-2" },
  { label: "D-10", value: "D-10" },
  { label: "E-7-1", value: "E-7-1" },
  { label: "F-2-7", value: "F-2-7" },
  { label: "F-5-16", value: "F-5-16" },
  { label: "E-9", value: "E-9" },
  { label: "E-7-4", value: "E-7-4" },
  { label: "F-2-99", value: "F-2-99" },
  { label: "F-5-1", value: "F-5-1" },
  { label: "F-2R", value: "F-2R" },
  { label: "F-5-6R", value: "F-5-6R" },
];

export const BoostSkillsForm = () => {
  const form = useForm<FormValue>();
  const validationOptions = useValidationOptions();
  const handleRequest = useHandleRequest();
  const navigate = useNavigate();
  const [useSetVisaHelp, { isLoading }] = useSetVisaHelpMutation();
  const [violations, setViolations] = useState("");

  const onSubmit = async (formValue: FormValue) => {
    formValue.kiip = (Number(formValue.kiip) / 5) * 100;
    formValue.topik = (Number(formValue.topik) / 6) * 100;
    formValue.educational_background =
      (Number(formValue.educational_background) / 4) * 100;

    await handleRequest({
      request: async () => {
        const response = await useSetVisaHelp({
          ...formValue,
          violation: violations ? violations : undefined,
        } as any);
        return response;
      },
      onSuccess: () => {
        navigate("/dashboard");
        toast({ title: "Successfully updated" });
      },
    });
  };

  return (
    <div className="w-full container">
      <div className="py-6">
        <Link to="/dashboard" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <div className="w-[60%] m-auto">
        <MainCard className="mt-8">
          <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-6 justify-between items-center">
              <div className="w-2/3">
                <Controller
                  control={form.control}
                  name="visa_status"
                  rules={validationOptions(true)}
                  render={({ field }) => (
                    <Select
                      label="Visa status"
                      onChange={field.onChange}
                      value={field.value}
                      options={VISA}
                      placeholder="D-10"
                      size="md"
                      fullWidth={true}
                      className="mb-4"
                      errorMessage={form.formState.errors.visa_status?.message}
                    />
                  )}
                />
              </div>
              <div className="w-1/3">
                <Controller
                  name="visa_expire_date"
                  control={form.control}
                  rules={validationOptions(true)}
                  render={({ field }) => (
                    <DatePicker
                      labelClassName="-mt-[18px]"
                      label="Visa expire date"
                      onChange={field.onChange}
                      value={field.value}
                      errorMessage={
                        form.formState.errors.visa_expire_date?.message
                      }
                    />
                  )}
                />
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">
                Educational background
              </h3>
              <Controller
                control={form.control}
                name="educational_background"
                render={({ field }) => (
                  <RadioList
                    className="grid grid-cols-2 gap-y-4"
                    name="educational_background"
                    onChange={field.onChange}
                    value={field.value}
                    options={EDUCATIONAL}
                  />
                )}
              />
            </div>
            <div className="mt-10">
              <h3 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display']">
                Have you finished the KIIP program?
              </h3>
              <Controller
                control={form.control}
                name="kiip"
                render={({ field }) => (
                  <RadioList
                    name="kiip"
                    onChange={field.onChange}
                    value={field.value}
                    options={KIIP}
                  />
                )}
              />
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">
                What is your Topik level?
              </h3>
              <Controller
                control={form.control}
                name="topik"
                render={({ field }) => (
                  <RadioList
                    name="topic"
                    onChange={field.onChange}
                    value={field.value}
                    options={TOPIK}
                  />
                )}
              />
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">
                Do you have any immigration violations or punishments?
              </h3>
              <Controller
                name="violation"
                control={form.control}
                render={({ field }) => (
                  <RadioList
                    name="violations"
                    onChange={field.onChange}
                    value={field.value}
                    options={VIOLATIONS}
                  />
                )}
              />
            </div>
            {form.watch("violation") === "y" && (
              <div className="mt-10">
                <Input
                  type="number"
                  value={violations}
                  onChange={(e) => setViolations(e.target.value)}
                  placeholder="Please specify"
                  label="Violation"
                />
              </div>
            )}
            <div className="py-[30px]">
              <Button
                loading={isLoading}
                type="submit"
                variant="primary"
                fullWidth
              >
                Submit
              </Button>
            </div>
          </form>
        </MainCard>
      </div>
    </div>
  );
};
