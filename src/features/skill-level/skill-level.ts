import {baseApi} from '..'
import {RTKTagNames} from '@/constants'
import {EndpointNameSkillLevelTest} from '@/constants/endpoints'
import {
  GetALlSkillLevelTestResponse,
  GetALlSkillLevelTestUpdateRequest,
  SkillLevelTestUpdateRequest,
  SkillLevelTestUpdateResponse,
} from './types'

export const SkillLevelExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    skillLevelTestUpdate: build.mutation<SkillLevelTestUpdateResponse, SkillLevelTestUpdateRequest>({
      query: body => ({
        url: EndpointNameSkillLevelTest.UPDATE_SKILL_TEST,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.TEST],
    }),
    getALlSkillLevelTest: build.query<GetALlSkillLevelTestResponse, GetALlSkillLevelTestUpdateRequest>({
      query: () => ({
        url: EndpointNameSkillLevelTest.GET_ALL_SKILL_TEST,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.TEST],
    }),
  }),
})

export const {useGetALlSkillLevelTestQuery, useLazyGetALlSkillLevelTestQuery, useSkillLevelTestUpdateMutation} =
  SkillLevelExtendedEndpoints
