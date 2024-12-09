import {useGetFilterDataQuery} from '@/features/jobs'

export const useGetFilterData = () => {
  const {data: {data: categoryFilterData = []} = {}, isLoading} = useGetFilterDataQuery({type: 'category'})
  const {data: {data: visaFilterData = []} = {}, isLoading: isLoadingVisa} = useGetFilterDataQuery({type: 'visa'})
  const {data: {data: nationalityFilterData = []} = {}, isLoading: isLoadingNationality} = useGetFilterDataQuery({
    type: 'nationality',
  })

  const allCategoryFilterData = [
    {
      title: 'Job Category',
      subCategories: categoryFilterData,
      value: 'category',
    },
    {
      title: 'Gender',
      value: 'gender',
      subCategories: ['Male', 'Female', 'Gender not important'],
    },
    {
      title: 'Korean Language Skills',
      value: 'korean_language_skills',
      subCategories: ['Advanced', 'Business', 'Basic Korean', 'Korean not important'],
    },
    {
      title: 'Visa',
      subCategories: visaFilterData?.map(item => item),
      value: 'visa',
    },
    {
      title: 'Nationality',
      value: 'nationality',
      subCategories: nationalityFilterData,
    },
  ]

  return {allCategoryFilterData, isLoading: isLoading || isLoadingVisa || isLoadingNationality}
}
