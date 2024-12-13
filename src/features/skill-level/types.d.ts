export interface SkillLevelTestUpdateResponse {}
export interface SkillLevelTestUpdateRequest {
  skill: string
  level: string
  score: number
}

export interface SkillLevelData {
  _id: string
  skill: string
  created_at: string
  level: string
  score: number
  updated_at: string
  user: string
}

export interface GetALlSkillLevelTestResponse {
  success: boolean
  data: SkillLevelData[]
}

export interface GetALlSkillLevelTestUpdateRequest {}
