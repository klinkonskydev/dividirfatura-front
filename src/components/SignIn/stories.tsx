import { Story, Meta } from '@storybook/react'
import SignIn from '.'

export default {
  title: 'SignIn',
  component: SignIn
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '366px', height: '275px', margin: '0 auto' }}>
    <SignIn />
  </div>
)
