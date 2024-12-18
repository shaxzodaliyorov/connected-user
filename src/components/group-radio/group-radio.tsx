import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'
import {Props} from './types'

export const GroupRadio: React.FC<Props> = ({label, id}) => (
  <RadioGroup defaultValue="comfortable">
    <div className="items-center w-full flex flex-row gap-x-5">
      <RadioGroupItem value="default" id={id} />
      <Label className="w-full" htmlFor="r1">
        {label}
      </Label>
    </div>
  </RadioGroup>
)
