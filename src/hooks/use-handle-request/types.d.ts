export type Params = {
  request: () => Promise<any>
  onSuccess?: (data?: any) => Promise<void> | void
  onError?: (error?: any) => Promise<void> | void
}
