import {Controller} from 'react-hook-form'
import {Props} from './types'
import {AvatarUpload, DatePicker, Input, Select, TagSearchInput} from '@/components'
import {useEffect} from 'react'
import {useHandleRequest, useValidationOptions} from '@/hooks'
import {useLazyGetAllCountryQuery, useLazyGetPositionQuery} from '@/features/info'
import {checkEmail} from '@/utils'
import {useTranslation} from 'react-i18next'
import {SearchInput} from '@/components/common/search-input'
import {SelectLanguage} from '../select-language'
import {VISA} from '@/constants'

export const PersonalDetails = ({form}: Props) => {
  const [getPosition, {data: {data: positions = []} = {}, isFetching: positionFetching}] = useLazyGetPositionQuery()
  const [getCountry, {data: {data: countries = []} = {}, isFetching}] = useLazyGetAllCountryQuery()

  const validationOptions = useValidationOptions()

  const handleRequest = useHandleRequest()

  const {t} = useTranslation()

  const fetchPosition = async () => {
    await handleRequest({
      request: async () => {
        const response = await getPosition({search: form.watch('position') as string})
        return response
      },
    })
  }

  const fetchCountry = async () => {
    await handleRequest({
      request: async () => {
        const response = await getCountry({search: form.watch('country')})
        return response
      },
    })
  }

  useEffect(() => {
    if (form.watch('position') && form.watch('position').length > 2) {
      fetchPosition()
    }
  }, [form.watch('position')])

  useEffect(() => {
    if (form.watch('country') && form.watch('country').length > 2) {
      fetchCountry()
    }
  }, [form.watch('country')])

  return (
    <div className="pt-5">
      <div className="p-5 w-full flex items-center justify-between bg-neutral-50 rounded-xl">
        <div className="w-[60%]">
          <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">Photo</h1>
          <p className="text-neutral-500 w-[80%] mt-2 mb-[18px] text-base font-normal font-['Inter Display'] leading-normal">
            This public profile picture will help recruiters recognize you!
          </p>
          <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-normal">
            SVG, PNG, JPG or GIF (max. 400 x 400px)
          </p>
        </div>
        <div>
          <Controller
            name="photo"
            control={form.control}
            render={({field}) => <AvatarUpload onChange={field.onChange} value={field.value} />}
          />
        </div>
      </div>
      <div className="pt-8 flex justify-between">
        <div>
          <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-relaxed">
            Who do you want to work as?
          </h1>
          <p className="text-neutral-500 mt-[5px] text-base font-normal font-['Inter Display'] leading-normal">
            Enter your current position.
          </p>
        </div>
        <div className="w-1/2">
          <Controller
            name="position"
            control={form.control}
            rules={validationOptions(true)}
            render={({field}) => (
              <TagSearchInput
                suggestions={positions?.map(pos => ({
                  label: pos.en,
                  value: pos.en,
                }))}
                loading={positionFetching}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        </div>
      </div>
      <div className="pt-10 pb-[30px]">
        <div className="h-px w-full bg-[#F5F5F5]" />
      </div>
      <div>
        <div>
          <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">Personal Details</h1>
        </div>
        <div className="grid gap-6 pt-6 grid-cols-2">
          <Controller
            control={form.control}
            name="full_name"
            rules={validationOptions(true)}
            render={({field}) => (
              <Input
                errorMessage={form.formState.errors.full_name?.message}
                placeholder="Enter your name"
                label="Full name"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            control={form.control}
            name="phone_number"
            rules={validationOptions(true)}
            render={({field}) => (
              <Input
                placeholder="Enter your phone number"
                label="Phone number"
                onChange={field.onChange}
                errorMessage={form.formState.errors.phone_number?.message}
                value={field.value}
              />
            )}
          />
          <Controller
            control={form.control}
            name="email"
            rules={validationOptions(true, 3, 100, {
              validate: (email: string) => (checkEmail(email) ? t('Please enter correct email') : undefined),
            })}
            render={({field}) => (
              <Input
                errorMessage={form.formState.errors.email?.message}
                placeholder="example@gmail.com"
                label="Email"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <div className="grid gap-x-[19px] grid-cols-2">
            <Controller
              control={form.control}
              name="date_of_birth"
              rules={validationOptions(true)}
              render={({field}) => (
                <DatePicker
                  label="Date of birth"
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Pick a date"
                  errorMessage={form.formState.errors.date_of_birth?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="gender"
              rules={validationOptions(true)}
              render={({field}) => (
                <Select
                  label="Gender"
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Select your gender"
                  errorMessage={form.formState.errors.gender?.message}
                  options={[
                    {label: 'Male', value: 'male'},
                    {label: 'Female', value: 'female'},
                    {label: 'Other', value: 'other'},
                  ]}
                />
              )}
            />
          </div>

          <div className="grid gap-x-2 grid-cols-2">
            <Controller
              control={form.control}
              name="country"
              rules={validationOptions(true)}
              render={({field}) => (
                <SearchInput
                  isSearching={isFetching}
                  options={countries?.map(country => ({
                    label: country.name,
                    value: country.name,
                  }))}
                  errorMessage={form.formState.errors.country?.message}
                  placeholder="Enter your country"
                  label="Country"
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
            <Controller
              control={form.control}
              name="city"
              rules={validationOptions(true)}
              render={({field}) => (
                <Input
                  errorMessage={form.formState.errors.city?.message}
                  placeholder="Enter your city"
                  label="City"
                  onChange={field.onChange}
                  value={field.value}
                  type={'text'}
                />
              )}
            />
          </div>
          <Controller
            control={form.control}
            name="current_visa"
            rules={validationOptions(true)}
            render={({field}) => (
              <Select
                options={VISA}
                label={t('Current Visa')}
                onChange={field.onChange}
                value={field.value}
                errorMessage={form.formState.errors.current_visa?.message}
              />
            )}
          />
        </div>
        <div className="py-10">
          <div className="w-full h-px bg-neutral-100" />
        </div>
        <div className="grid w-full grid-cols-2">
          <Controller
            control={form.control}
            name="languages"
            render={({field}) => <SelectLanguage onChange={field.onChange} value={field.value as any[]} />}
          />
        </div>
      </div>
    </div>
  )
}
