export const useGetGradeDetails = (percentage: number) => {
  if (percentage >= 85) {
    return {grade: 'A', bgColor: '#34C759'}
  } else if (percentage >= 70 && percentage < 85) {
    return {grade: 'B', bgColor: '#FB8A2E'}
  } else {
    return {grade: 'C', bgColor: '#E2425C'}
  }
}
