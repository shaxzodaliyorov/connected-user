import React, {useState} from 'react'
import {Input} from '@/components'

export interface SocialLinksType {
  instagram?: string
  kakao_talk?: string
  portfolio?: string
}

interface SocialLinksProps {
  value?: SocialLinksType
  onChange?: (value: SocialLinksType) => void
}

export const SocialLinks: React.FC<SocialLinksProps> = ({value, onChange}) => {
  const [socialLinks, setSocialLinks] = useState<SocialLinksType>({
    instagram: value?.instagram || undefined,
    kakao_talk: value?.kakao_talk || undefined,
    portfolio: value?.portfolio || undefined,
  })

  const handleInputChange = (key: keyof SocialLinksType, newValue: string) => {
    const updatedLinks = {...socialLinks, [key]: newValue || undefined}
    setSocialLinks(updatedLinks)
    onChange?.(updatedLinks)
  }

  return (
    <div>
      <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">Links</h1>
      <div className="grid gap-6 pt-6 grid-cols-2">
        <Input
          label="Instagram"
          placeholder="Enter your link"
          inputSizeClassName="h-[52px]"
          value={socialLinks.instagram || ''}
          onChange={e => handleInputChange('instagram', e.target.value)}
        />
        <Input
          label="Kakao Talk"
          placeholder="Enter your link"
          inputSizeClassName="h-[52px]"
          value={socialLinks.kakao_talk || ''}
          onChange={e => handleInputChange('kakao_talk', e.target.value)}
        />
        <Input
          label="Portfolio"
          placeholder="Enter your link"
          inputSizeClassName="h-[52px]"
          value={socialLinks.portfolio || ''}
          onChange={e => handleInputChange('portfolio', e.target.value)}
        />
      </div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
    </div>
  )
}
