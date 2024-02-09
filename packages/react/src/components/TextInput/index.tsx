import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { VariantProps } from '@stitches/react'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'>,
    VariantProps<typeof TextInputContainer> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
