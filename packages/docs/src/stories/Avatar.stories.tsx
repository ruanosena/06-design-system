import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@osena-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/ruanosena.png',
    alt: 'Ruan O. Sena',
  },
  argTypes: {
    src: {
      description: 'Overwrite description',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
