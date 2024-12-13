export const getLastYears = () => {
  const currentYear = new Date().getFullYear()
  const years: number[] = []

  for (let i = 0; i < 20; i++) {
    years.push(currentYear - i)
  }

  return years
}
