import { Story, Meta } from '@storybook/react'
import Textbox, { TextboxProps } from '.'

export default {
  title: 'Textbox',
  component: Textbox,
  args: {
    placeholder: 'Seu email'
  }
} as Meta

export const Default: Story<TextboxProps> = (args) => <Textbox {...args} />
