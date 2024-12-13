import {RANDOM_COLORS} from '@/constants'
export const getRandomColor = () => RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]
