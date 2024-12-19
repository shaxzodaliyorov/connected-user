export type Quiz = {
  question: string
  options: string[]
  answer: string
}

export type Props = {
  setScore: (score: number | null) => void
  score: number | null
  quiz: Quiz[]
  setQuiz: (quiz: Quiz[]) => void
}
