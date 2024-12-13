/* eslint-disable unicorn/no-null */
import {useUploadFileMutation} from '@/features/uploads'
import {UseFileUploadReturn} from './types'

export const useFileUpload = (): UseFileUploadReturn => {
  const [uploadFile, {isLoading}] = useUploadFileMutation()

  const handleFileUpload = async (file: File): Promise<string | null> => {
    try {
      const result: any = await uploadFile(file).unwrap()
      if (result?.file_path) {
        return result.file_path
      }
      return null
    } catch (error) {
      console.error('File upload failed', error)
      return null
    }
  }

  return {handleFileUpload, isLoading}
}
