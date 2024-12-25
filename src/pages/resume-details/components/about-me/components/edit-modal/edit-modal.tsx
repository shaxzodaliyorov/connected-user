import { Button, Sheet, TextArea } from "@/components";
import { FormValues, Props } from "./type";
import {
  useCheckTextAi,
  useHandleRequest,
  useValidationOptions,
} from "@/hooks";
import { useParams } from "react-router-dom";
import { useUpdateResumeMutation } from "@/features/resume/resume";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { AiIcon } from "@/icons/ai-icon";
import { Form } from "@/components/ui/form";

export const EditModal = ({ close, open, resume }: Props) => {
  const form = useForm<FormValues>();
  const validationOptions = useValidationOptions();
  const { id } = useParams();
  const handleRequest = useHandleRequest();
  const [updateResume, { isLoading }] = useUpdateResumeMutation();

  const { checkTextAi, loading } = useCheckTextAi();

  const checkTextHandle = async () => {
    const result = await checkTextAi(form.getValues("about_me"));
    form.setValue("about_me", result?.content);
  };

  const onSubmit = async (formData: FormValues) => {
    await handleRequest({
      request: async () => {
        const response = await updateResume({
          id: id!,
          body: { ...resume, about_me: formData.about_me },
        });
        return response;
      },
      onSuccess: () => {
        toast({ title: "Successfully updated", variant: "default" });
        close();
      },
    });
  };

  useEffect(() => {
    form.setValue("about_me", resume?.about_me);
  }, [resume, form]);
  return (
    <Sheet
      title="Describe yourself"
      side="right"
      className="min-w-[460px]"
      open={open}
      onClose={close}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
          <Controller
            control={form.control}
            rules={validationOptions(true)}
            name="about_me"
            render={({ field }) => (
              <TextArea
                label="About Me"
                placeholder="Create a short introduction that resonates with you! If you're struggling, consider using AI for help!"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <div className="pt-4">
            <Button
              className="ai_button py-2 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.50)]"
              leftIcon={<AiIcon />}
              loading={loading}
              onClick={checkTextHandle}
              size="sm"
            >
              AI Updating
            </Button>
          </div>
          <div className=" grid grid-cols-2 gap-x-3  items-center justify-between w-full absolute bottom-5 right-0 px-[30px]">
            <Button onClick={close} className="py-[13px]" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="py-[13px]" loading={isLoading}>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </Sheet>
  );
};
