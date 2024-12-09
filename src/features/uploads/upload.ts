import {UploadFileResponse} from './types'
import {baseApi} from '..'
import {EndpointNameUploads} from '@/constants'

export const UploadsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    uploadFile: build.mutation<UploadFileResponse, File>({
      query: file => {
        const formData = new FormData()
        formData.append('file', file)
        return {
          url: EndpointNameUploads.UPLOAD_FILE,
          method: 'POST',
          body: formData,
        }
      },
    }),
  }),
})

export const {useUploadFileMutation} = UploadsExtendedEndpoints
