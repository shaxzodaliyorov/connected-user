import React from 'react'
import {Props} from './types'
import {useTranslation} from 'react-i18next'
import dayjs from 'dayjs'
import {Link} from 'react-router-dom'

export const Card: React.FC<Props> = ({newsItem}) => {
  const {t} = useTranslation()
  return (
    <Link
      className="w-[368px] bg-white cursor-pointer border border-gray-200 rounded-[15px] shadow-sm overflow-hidden"
      to={`/visa-new/${newsItem._id}`}
    >
      <img src={newsItem.images[0]} alt={newsItem.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold line-clamp-1 text-gray-800">{newsItem.title}</h3>
        <p className="text-[15px] line-clamp-2 font-normal text-gray-600 mt-2 w-full">{newsItem.desc}</p>
        <div className="text-[14px] text-gray-500 mt-4">
          <span>{t('Immigration')}</span> · <span>{dayjs(newsItem.created_at).format('MMM DD, YYYY')}</span>
        </div>
      </div>
    </Link>
  )
}
