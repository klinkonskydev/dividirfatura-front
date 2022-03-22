import { Story, Meta } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '366px', height: '275px', margin: '0 auto' }}>
    <FormSignIn />
  </div>
)
