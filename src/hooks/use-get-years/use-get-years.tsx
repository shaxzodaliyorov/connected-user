import {useState} from 'react'

export const useGetYear = () => {
  const [years, setYears] = useState<number[]>([])

  const currentYear = new Date().getFullYear()
  const lastYear = currentYear - 20

  for (let i = lastYear; i < currentYear; i++) {
    const currentData = [...years]
    currentData.push(i)
    setYears(currentData)
  }

  return years
}
