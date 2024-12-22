import {Form as FormUI} from '@/components/ui/form'
import {MainCard} from '@/components/main-card'
import {CheckLists, GridOptions, SectionLabel} from './components'
import {Controller, useForm} from 'react-hook-form'
import {FormValue} from './types'
import {useTranslation} from 'react-i18next'
import {Button} from '@/components'

// const TEST_VISA = [
//   {
//     label: 'D-10-1 Visa Score Test',
//     value: 'D-10-1 Visa Score Test',
//   },
//   {
//     label: 'E-7-4 Visa Score Test',
//     value: 'E-7-4 Visa Score Test',
//   },
//   {
//     label: 'F-2-7 Visa Score Test',
//     value: 'F-2-7 Visa Score Test',
//   },
// ]

const AGE_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: '20-24',
    value: '20-24',
    subLabel: '10p',
    point: 10,
  },
  {
    label: '25-29',
    value: '25-29',
    subLabel: '15p',
    point: 15,
  },
  {
    label: '30-34',
    value: '30-34',
    subLabel: '20p',
    point: 20,
  },
  {
    label: '35-39',
    value: '35-39',
    subLabel: '15p',
    point: 15,
  },
  {
    label: '40-49',
    value: '40-49',
    subLabel: '5p',
    point: 5,
  },
]

const PROFICIENCY_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: 'Associate Degree in Korea',
    value: 'Associate Degree in Korea',
    subLabel: '10p',
    point: 10,
  },
  {
    label: 'Bachelor’s in Korea or abroad',
    value: 'Bachelor’s in Korea or abroad',
    subLabel: '15p',
    point: 15,
  },
  {
    label: 'Master’s in Korea or abroad',
    value: 'Master’s in Korea or abroad',
    subLabel: '20p',
    point: 20,
  },
  {
    label: 'PhD in Korea or abroad',
    value: 'PhD in Korea or abroad',
    subLabel: '15p',
    point: 15,
  },
]

const ADDITIONAL_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },

  {label: '1-2 years in Korea', value: '1-2 years in Korea', subLabel: '5p', point: 5},
  {
    label: '3-4 years in Korea',
    value: '3-5 years in Korea',
    subLabel: '10p',
    point: 10,
  },
  {
    label: 'Over 5 years in Korea',
    value: 'Over 5 years in Korea',
    subLabel: '15p',
    point: 15,
  },
  {
    label: '3-4 years abroad',
    value: '3-4 years abroad',
    subLabel: '5p',
    point: 5,
  },
  {
    label: '5-6 years abroad',
    value: '5-6 years abroad',
    subLabel: '10p',
    point: 10,
  },
  {
    label: 'Over 7 years abroad',
    value: 'Over 7 years abroad',
    subLabel: '15p',
    point: 15,
  },
]

const EXPERIENCE_IN_KOREA_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: 'More than 3 years since graduating from a bachelor’s degree',
    value: 'More than 3 years since graduating from a bachelor’s degree',
    subLabel: '10p',
    point: 10,
  },

  {
    label: 'Within 3 years of graduating from an associate degree',
    value: 'Within 3 years of graduating from an associate degree',
    subLabel: '30p',
    point: 30,
  },
  {
    label: 'Within 3 years since graduating from a master’s degree',
    value: 'Within 3 years since graduating from a master’s degree',
    subLabel: '10p',
    point: 10,
  },
  {
    label: 'Within 3 years of graduating from a bachelor’s degree',
    value: 'Within 3 years of graduating from a bachelor’s degree',
    subLabel: '30p',
    point: 30,
  },
  {
    label: 'More than 3 years of graduating from a PhD degree',
    value: 'More than 3 years of graduating from a PhD degree',
    subLabel: '15p',
    point: 15,
  },
]

const RESEARCH_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: '12-18 months',
    value: '12-18 months',
    subLabel: '3p',
    point: 3,
  },
  {
    label: 'More than 18 months',
    value: 'More than 18 months',
    subLabel: '5p',
    point: 5,
  },
]

const EXCHANGE_STUDENT = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: '12-18 months',
    value: '12-18 months',
    subLabel: '3p',
    point: 3,
  },
  {
    label: 'More than 18 months',
    value: 'More than 18 months',
    subLabel: '5p',
    point: 5,
  },
]

const TRAINING_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: '12-18 months',
    value: '12-18 months',
    subLabel: '3p',
    point: 3,
  },
  {
    label: 'More than 18 months',
    value: 'More than 18 months',
    subLabel: '5p',
    point: 5,
  },
]

const TOPIK_OR_KIIP_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: 'Level 2 or higher',
    value: 'Level 2 or higher',
    subLabel: '5p',
    point: 5,
  },

  {
    label: 'Level 3 or higher',
    value: 'Level 3 or higher',
    subLabel: '10p',
    point: 10,
  },
  {
    label: 'Level 4 or higher',
    value: 'Level 4 or higher',
    subLabel: '15p',
    point: 15,
  },
  {
    label: 'Level 5 or higher',
    value: 'Level 5 or higher',
    subLabel: '20p',
    point: 20,
  },
]

const PRIVATE_TRAINING_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: '12-18 months',
    value: '12-18 months',
    subLabel: '3p',
    point: 3,
  },
  {
    label: 'More than 18 months',
    value: 'More than 18 months',
    subLabel: '5p',
    point: 5,
  },
]

const ADDITIONAL_POINTS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0point',
    point: 0,
  },
  {
    label:
      'Recommendation for issuance of job-seeking visa by the relevant central administrative head and overseas diplomat',
    value:
      'Recommendation for issuance of job-seeking visa by the relevant central administrative head and overseas diplomat',
    subLabel: '20p',
    point: 20,
  },
  {
    label:
      'Professionals with experience in global corporate employment (individuals who have worked for at least one year within the past 10 years in Fortune 500 companies listed within the last 3 years).',
    value:
      'Professionals with experience in global corporate employment (individuals who have worked for at least one year within the past 10 years in Fortune 500 companies listed within the last 3 years).',
    subLabel: '30p',
    point: 30,
  },
  {
    label:
      'Top university graduate (within the last 3 years has graduated from a Times World University Rankings top 200 university or QS World University Rankings top 500 university)',
    value:
      'Top university graduate (within the last 3 years has graduated from a Times World University Rankings top 200 university or QS World University Rankings top 500 university)',
    subLabel: '15p',
    point: 15,
  },
  {
    label: 'STEM degree holder(includingan associate degree from a Korean univeristy)',
    value: 'More than 3 years since graduating from an associate degree',
    subLabel: '5p',
    point: 5,
  },
  {
    label: 'High-income professional (with an annual salary of at least $50,000 USD)',
    value: 'High-income professional (with an annual salary of at least $50,000 USD)',
    subLabel: '5p',
    point: 5,
  },
  {
    label: 'Within 3 years of graduating from a bachelor’s degree',
    value: 'Within 3 years of graduating from a bachelor’s degree',
    subLabel: '30p',
    point: 30,
  },
  {
    label: 'More than 3 years of graduating from a PhD degree',
    value: 'More than 3 years of graduating from a PhD degree',
    subLabel: '15p',
    point: 15,
  },
]

const IMMIGRATION_OPTIONS = [
  {
    label: 'N/A',
    value: 'N/A',
    subLabel: '0p',
    point: 0,
  },
  {
    label: 'Fine more than 300.000won',
    value: 'Fine more than 300.000won',
    subLabel: '-20p',
    point: -20,
  },
  {
    label: 'Fine more than 100.000won-less than 300.000won',
    value: 'Fine more than 100.000won-less than 300.000won',
    subLabel: '-10p',
    point: -10,
  },
  {
    label: 'Fine more than 50.000won-less than 100.000won',
    value: 'Fine more than 50.000won-less than 100.000won',
    subLabel: '-15p',
    point: -15,
  },
]

const PUNISHMENT_HISTORY = [
  {
    label: 'Fine more than 300.000won',
    value: 'Fine more than 300.000won',
    subLabel: '-30p',
    point: -30,
  },
  {
    label: 'Fine more than 200.000won-less than 300.000won',
    value: 'Fine more than 200.000won-less than 300.000won',
    subLabel: '-10p',
    point: -10,
  },
  {
    label: 'Less than 200.000won',
    value: 'Less than 200.000won',
    subLabel: '-5p',
    point: -5,
  },
]

export const CalculationCard = () => {
  const form = useForm<FormValue>({
    defaultValues: {
      age: {
        value: 0,
        point: 0,
      },
      additional_information: {value: 0, point: 0},
      proficiency: {
        value: 0,
        point: 0,
      },
      experience_in_korea: {point: 0, value: 0},
      research: {
        value: 0,
        point: 0,
      },
      exchange: {
        value: 0,
        point: 0,
      },
      language_training: {
        value: 0,
        point: 0,
      },
      private_training: {
        value: 0,
        point: 0,
      },

      topik_or_kiip: {
        value: 0,
        point: 0,
      },
      training: {
        value: 0,
        point: 0,
      },
      additional_points: {point: 0, value: 0},
      punishment: {
        value: 0,
        point: 0,
      },
    },
  })

  const {t} = useTranslation()

  const totalScore =
    form.watch('age').point +
    form.watch('additional_information').point +
    form.watch('research').point +
    form.watch('exchange').point +
    form.watch('language_training').point +
    form.watch('private_training').point +
    form.watch('topik_or_kiip').point +
    form.watch('training').point +
    form.watch('additional_points').point +
    form.watch('punishment').point +
    form.watch('proficiency').point +
    form.watch('experience_in_korea').point +
    form.watch('immigration')?.point

  const onSubmit = () => {}

  return (
    <div className="w-full relative">
      <MainCard className="mt-6">
        <FormUI {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-full">
              <SectionLabel point={form.watch('age')?.point || 0} title="1.Age" />
              <p className="text-[#0C0C0C] text-base not-italic font-normal leading-[160%] mb-4">
                {t('Please make sure your age is correct.')}
              </p>
              <Controller
                name="age"
                control={form.control}
                render={({field}) => (
                  <GridOptions onChange={field.onChange} value={field.value} options={AGE_OPTIONS} />
                )}
              />
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <SectionLabel point={form.watch('proficiency')?.point || 0} title="2.Proficiency" />
              <p className="text-[#0C0C0C] text-base not-italic font-normal leading-[160%] mb-4">
                {t('You must have graduated from the degree. Associate degrees studied abroad are not accepted.')}
              </p>
              <Controller
                name="proficiency"
                control={form.control}
                render={({field}) => (
                  <GridOptions
                    onChange={field.onChange}
                    value={field.value}
                    options={PROFICIENCY_OPTIONS}
                    contentClassName="grid-cols-3"
                  />
                )}
              />
            </div>
            <div className="my-10 p-[30px] bg-[#FAFAFA] rounded-xl">
              <p className="text-[#161C1C] text-xl not-italic font-medium leading-[160%]">
                {t('Additional Information')}
              </p>
              <p className="text-[#0C0C0C] text-base not-italic font-normal leading-[160%]">
                {t('You can only score maximum of 70 points from this section.')}
              </p>
            </div>
            <div className="w-full">
              <div className="mb-4">
                <SectionLabel title="3.Work Experience" point={form.watch('additional_information')?.point || 0} />
                <p className="text-black text-base mt-[10px] not-italic font-normal leading-[160%]">
                  • Must be within the last 10 years. <br /> • Must be relevant experience to the visa. <br /> • Only a
                  maximum of 15 points can be attained.
                </p>
              </div>
              <Controller
                name="additional_information"
                control={form.control}
                render={({field}) => (
                  <CheckLists onChange={field.onChange} value={field.value} options={ADDITIONAL_OPTIONS} />
                )}
              />
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <SectionLabel
                point={form.watch('experience_in_korea')?.point || 0}
                title={t('4.Study Experience in Korea')}
              />
              <div className="pt-4">
                <Controller
                  name="experience_in_korea"
                  control={form.control}
                  render={({field}) => (
                    <CheckLists onChange={field.onChange} value={field.value} options={EXPERIENCE_IN_KOREA_OPTIONS} />
                  )}
                />
              </div>
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <div className="w-full">
                <SectionLabel
                  point={
                    form.watch('research')?.point +
                      form.watch('exchange')?.point +
                      form.watch('training')?.point +
                      form.watch('private_training')?.point +
                      form.watch('language_training')?.point || 0
                  }
                  title="5.Other Training and Education"
                />
                <p className="text-[#0C0C0C] mt-[10px] text-base not-italic font-normal leading-[160%]">
                  •{t('Max point is 5')}
                </p>
              </div>
              <div className="w-full mt-5">
                <div className="w-full">
                  <p className="text-[#161C1C] text-base not-italic font-medium leading-[160%]">
                    5.1. {t('Graduate Research Exp. (D-2-5)')}
                  </p>
                  <div className="pb-10 pt-4 w-full">
                    <Controller
                      name="research"
                      control={form.control}
                      render={({field}) => (
                        <GridOptions
                          contentClassName="grid-cols-3"
                          onChange={field.onChange}
                          value={field.value}
                          options={RESEARCH_OPTIONS}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#161C1C] text-base not-italic font-medium leading-[160%]">
                    5.2. {t('Exchange Student')} (D-2-6)
                  </p>
                  <div className="pb-10 pt-4 w-full">
                    <Controller
                      name="exchange"
                      control={form.control}
                      render={({field}) => (
                        <GridOptions
                          contentClassName="grid-cols-3"
                          onChange={field.onChange}
                          value={field.value}
                          options={EXCHANGE_STUDENT}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#161C1C] text-base not-italic font-medium leading-[160%]">
                    5.3. {t('Public Inst. Training')} (D-4-2)
                  </p>
                  <div className="pb-10 pt-4 w-full">
                    <Controller
                      name="training"
                      control={form.control}
                      render={({field}) => (
                        <GridOptions
                          contentClassName="grid-cols-3"
                          onChange={field.onChange}
                          value={field.value}
                          options={TRAINING_OPTIONS}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#161C1C] text-base not-italic font-medium leading-[160%]">
                    5.4. {t('Private Inst. Training')} (D-4-6)
                  </p>
                  <div className="pb-10 pt-4 w-full">
                    <Controller
                      name="private_training"
                      control={form.control}
                      render={({field}) => (
                        <GridOptions
                          contentClassName="grid-cols-3"
                          onChange={field.onChange}
                          value={field.value}
                          options={PRIVATE_TRAINING_OPTIONS}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#161C1C] text-base not-italic font-medium leading-[160%]">
                    5.5. {t('Language Training')} (D-4-1)
                  </p>
                  <p className="text-[#0C0C0C] text-base mt-[7px] not-italic font-normal leading-[160%]">
                    • 0 point if over 18 months
                  </p>
                  <div className="pt-4 w-full">
                    <Controller
                      name="language_training"
                      control={form.control}
                      render={({field}) => (
                        <GridOptions
                          contentClassName="grid-cols-3"
                          onChange={field.onChange}
                          value={field.value}
                          options={PRIVATE_TRAINING_OPTIONS}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <SectionLabel point={form.watch('topik_or_kiip')?.point} title="6. TOPIK or KIIP" />
              <p className="text-[#0C0C0C] w-full mt-[10px] mb-4 text-base not-italic font-normal leading-[160%]">
                Scores are accepted in their valid peroid. (* Who have graduated from Korean university is all time
                accepted)
              </p>
              <Controller
                name="topik_or_kiip"
                control={form.control}
                render={({field}) => (
                  <GridOptions
                    contentClassName="grid-cols-3"
                    onChange={field.onChange}
                    value={field.value}
                    options={TOPIK_OR_KIIP_OPTIONS}
                  />
                )}
              />
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <SectionLabel point={form.watch('additional_points').point} title="7. Additional Points" />
              <div className="pt-6">
                <Controller
                  name="additional_points"
                  control={form.control}
                  render={({field}) => (
                    <CheckLists
                      contentClassName="grid-cols-2"
                      onChange={field.onChange}
                      value={field.value}
                      options={ADDITIONAL_POINTS}
                    />
                  )}
                />
              </div>
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="w-full">
              <div className="w-full">
                <SectionLabel
                  point={form.watch('immigration')?.point + form.watch('punishment')?.point || 0}
                  title="8.Violations"
                />
                <p className="text-[#0C0C0C] text-base not-italic mt-[10px] font-normal leading-[24px]">
                  On the combined amount of the disposal amount within 5 years from the date of application (excluding
                  fines) and applying the combined score between items (duplicate mountain lodges) <br />
                  <br /> [Caution] If you receive a penalty within 3 years from the date of application, your stay
                  permit will be restricted or restricted for 3 years according to the integrated standards for
                  residence permit restrictions. Anyone who has been fined more than 3 million won within the past 30
                  years is subject to eligibility restrictions.
                </p>
              </div>
              <div className="w-full mt-10">
                <div className="w-full">
                  <p className="text-[#161C1C] mb-4 text-lg not-italic font-medium leading-[22px]">
                    8.1. Immigration Law Violation
                  </p>
                  <Controller
                    name="immigration"
                    control={form.control}
                    render={({field}) => (
                      <CheckLists
                        contentClassName="grid-cols-3"
                        onChange={field.onChange}
                        value={field.value}
                        options={IMMIGRATION_OPTIONS}
                      />
                    )}
                  />
                </div>
                <div className="w-full mt-10">
                  <p className="text-[#161C1C] mb-4 text-lg not-italic font-medium leading-[22px]">
                    8.1. Criminal punishment history
                  </p>
                  <Controller
                    name="punishment"
                    control={form.control}
                    render={({field}) => (
                      <CheckLists
                        contentClassName="grid-cols-3"
                        onChange={field.onChange}
                        value={field.value}
                        options={PUNISHMENT_HISTORY}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="w-full h-px bg-[#D6DDEB]" />
            </div>
            <div className="flex justify-end w-full">
              <Button type="submit" className="min-w-[190px]">
                Continue
              </Button>
            </div>
          </form>
        </FormUI>
      </MainCard>
      <div className="flex items-center justify-center w-full">
        <div className="w-[400px] rounded-lg bg-white p-[18px] border border-[#F5F5F5] flex items-center justify-between fixed shadow-md bottom-[30px]">
          <p className="font-medium text-[24px] leading-[31.2px] text-[#0C0C0C]">D-10-1</p>
          <div className="flex items-center justify-center w-[50%]">
            <p className="text-sm text-[#737373] leading-[18.2px]">You need a few more points</p>
            <p className="bg-[#F79009] text-white py-[5px] px-[20px] rounded-xl font-semibold text-[18px] w-max">
              {totalScore || 0}p
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
