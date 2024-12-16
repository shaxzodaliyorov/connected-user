/* eslint-disable prefer-arrow/prefer-arrow-functions */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatTimeAgo = (dateString: string) => {
  if (!dateString) {
    return 'Date not provided'
  }

  const now = dayjs()
  const givenDate = dayjs(dateString)

  if (!givenDate.isValid()) {
    return 'Invalid date'
  }

  return givenDate.from(now)
}
