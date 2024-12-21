import {MainCard} from '@/components/main-card'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {
  AddEducation,
  AddExperience,
  AdditionalDetails,
  AddSkill,
  DescribeYourself,
  PersonalDetails,
  SocialLinks,
} from './components'
import {Button} from '@/components'
import {useFileUpload, useHandleRequest} from '@/hooks'
import dayjs from 'dayjs'
import {toast} from '@/components/ui/use-toast'
import {useGetResumeQuery, useUpdateResumeMutation} from '@/features/resume/resume'
import {useEffect} from 'react'
import {AddResumeFormValues} from './types'

export const EditResume = () => {
  const form = useForm<AddResumeFormValues>({
    defaultValues: {
      education: [
        {
          admission_year: '',
          category: '',
          description: '',
          graduation_year: '',
          major: '',
          region: '',
          university: '',
        },
      ],
      experience: [
        {
          company: '',
          description: '',
          employment_type: '',
          joining_year: '',
          location: '',
          retirement_year: '',
          still_working: false,
          title: '',
          website: '',
        },
      ],
    },
  })
  const {id} = useParams()
  const {data: {data: resume} = {}, isLoading: isLoadingResume} = useGetResumeQuery(id as string)
  const [updateResume, {isLoading}] = useUpdateResumeMutation()
  const {handleFileUpload} = useFileUpload()
  const navigate = useNavigate()

  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<AddResumeFormValues> = async formData => {
    formData.date_of_birth = dayjs(formData.date_of_birth).format('YYYY-MM-DD')
    if (typeof formData.photo === 'object') {
      formData.photo = await handleFileUpload(formData.photo as File)
    }

    formData.experience = formData.experience.map(item => ({...item, still_working: Boolean(item.still_working)}))
    await handleRequest({
      request: async () => {
        const response = await updateResume({id: id as string, body: formData})
        return response
      },
      onSuccess: () => {
        toast({title: 'Resume updated', variant: 'default'})
        navigate('/resume')
      },
    })
  }

  useEffect(() => {
    if (resume) {
      form.setValue('position', resume?.position as any)
      form.setValue('full_name', resume?.full_name as string)
      form.setValue('email', resume?.email as string)
      form.setValue('phone_number', resume?.phone_number as string)
      form.setValue('date_of_birth', resume?.date_of_birth as string)
      form.setValue('gender', resume?.gender as string)
      form.setValue('photo', resume?.photo as string)
      form.setValue('city', resume?.city as string)
      form.setValue('country', resume?.country as string)
      form.setValue('working_experience', resume?.working_experience)
      form.setValue('experience', resume?.experience as any[])
      form.setValue('education', resume?.education as any[])
      form.setValue('skills', resume?.skills as any[])
      form.setValue('languages', resume?.languages?.map(item => ({title: item.title, level: item.level})) as any)
      form.setValue('employee_type', resume?.employee_type as string)
      form.setValue('current_visa', resume?.current_visa as string)
      form.setValue('nationality', resume?.nationality as string)
      form.setValue('about_me', resume?.about_me as string)
      form.setValue('social_links', resume?.social_links)
      form.setValue('expected_salary', resume?.expected_salary)
      form.setValue('country', resume?.country)
      form.setValue('city', resume?.city)
    }
  }, [resume, form])

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
                render={({field}) => <SocialLinks onChange={field.onChange} value={field.value} />}
              />
              <DescribeYourself form={form} />
              <AddExperience form={form} />
              <AddEducation form={form} />
              <AddSkill form={form} />
              <div className="flex justify-end">
                <Button loading={isLoading || isLoadingResume} className="px-[78px] py-[13px]" type="submit" size="sm">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </MainCard>
    </section>
  )
}
