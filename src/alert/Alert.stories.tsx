import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Alert from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Alert 组件用于向用户显示重要信息，支持不同类型的提示状态。',
      },
    },
  },
  argTypes: {
    kind: {
      control: {
        type: 'select',
      },
      options: ['info', 'positive', 'negative', 'warning'],
      description: 'Alert 的类型',
      defaultValue: 'info',
    },
    children: {
      control: 'text',
      description: 'Alert 的内容',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    kind: 'info',
    children: '这是一个信息提示',
  },
};

export const Positive: Story = {
  args: {
    kind: 'positive',
    children: '操作成功！',
  },
};

export const Negative: Story = {
  args: {
    kind: 'negative',
    children: '发生错误，请检查输入',
  },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    children: '请注意，这里有重要提示',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert kind="info">信息提示</Alert>
      <Alert kind="positive">成功提示</Alert>
      <Alert kind="negative">错误提示</Alert>
      <Alert kind="warning">警告提示</Alert>
    </div>
  ),
};