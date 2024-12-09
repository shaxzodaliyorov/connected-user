import {AUTH_STORAGE_KEYS} from '@/constants'

export interface SetCredentialsParams {
  accessToken: string
  refreshToken: string
}

class Storage {
  public setCredentials({accessToken, refreshToken}: SetCredentialsParams) {
    if (accessToken) {
      localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, `Bearer ${accessToken}`)
      localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, `Bearer ${refreshToken}`)
    }
  }

  public removeCredentials() {
    localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN)
    localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN)
  }

  public getTokens(): {accessToken: string | null; refreshToken: string | null} {
    return {
      accessToken: localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN),
      refreshToken: localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN),
    }
  }
}

export const useStorage = new Storage()
