import React from 'react'

export const Card: React.FC<Props> = ({title, description, category, date, imageUrl}) => (
    <div className="w-[368px] bg-white border border-gray-200 rounded-[15px] shadow-sm overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-[15px] font-normal text-gray-600 mt-2 w-full">{description}</p>
        <div className="text-[14px] text-gray-500 mt-4">
          <span>{category}</span> · <span>{date}</span>
        </div>
      </div>
    </div>
  )
