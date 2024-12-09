export interface UseFileUploadReturn {
  handleFileUpload: (file: File) => Promise<string | null>
  isLoading: boolean
}
