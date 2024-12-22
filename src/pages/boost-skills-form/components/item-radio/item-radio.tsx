import {Props} from './types'

export const ItemRadio = ({htmlFor, label, name}: Props) => (
  <label htmlFor={htmlFor} className="flex gap-[10px] items-center cursor-pointer">
    <input type="radio" className="w-5 h-5" name={name} id={htmlFor} />
    <span className="text-base font-normal leading-[20.8px] text-left text-[#0C0C0C]">{label}</span>
  </label>
)
