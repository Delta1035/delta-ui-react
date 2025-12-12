import type { Meta, StoryObj } from '@storybook/react';
import Form from './index';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form 组件提供表单容器，支持表单验证和数据收集功能。',
      },
    },
  },
  argTypes: {
    initialValues: {
      control: 'object',
      description: '表单初始值',
    },
    onFinish: {
      action: 'onFinish',
      description: '表单提交成功回调',
    },
    onFinishFailed: {
      action: 'onFinishFailed', 
      description: '表单提交失败回调',
    },
    className: {
      control: 'text',
      description: '组件样式类名',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    initialValues: {
      username: '',
      email: '',
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
          用户名:
        </label>
        <input
          id="username"
          name="username"
          type="text"
          defaultValue={args.initialValues?.username}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
          邮箱:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={args.initialValues?.email}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        提交
      </button>
    </Form>
  ),
};

export const WithInitialValues: Story = {
  args: {
    initialValues: {
      username: 'admin',
      email: 'admin@example.com',
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="username-init" style={{ display: 'block', marginBottom: '0.5rem' }}>
          用户名:
        </label>
        <input
          id="username-init"
          name="username"
          type="text"
          defaultValue={args.initialValues?.username}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email-init" style={{ display: 'block', marginBottom: '0.5rem' }}>
          邮箱:
        </label>
        <input
          id="email-init"
          name="email"
          type="email"
          defaultValue={args.initialValues?.email}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        提交
      </button>
    </Form>
  ),
};