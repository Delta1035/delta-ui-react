# Storybook 配置说明

本项目已成功配置 Storybook 用于组件库的开发和展示。

## 🚀 快速开始

### 开发环境
```bash
# 启动开发服务器 (清理构建产物 + 启动 dev server)
pnpm run dev:storybook

# 或使用原始命令
pnpm run storybook
```

### 构建和预览
```bash
# 构建静态文件
pnpm run build:storybook

# 预览模式 (构建 + 本地服务器)
pnpm run preview:storybook
```

### 部署
```bash
# 部署到 GitHub Pages
pnpm run deploy:storybook
```

## 📁 目录结构

```
.storybook/
├── main.ts          # 主配置文件
├── preview.ts       # 预览配置
└── README.md        # 本文档

src/
├── alert/
│   └── Alert.stories.tsx    # Alert 组件 Stories
├── form/
│   └── Form.stories.tsx     # Form 组件 Stories
└── [component]/
    └── [Component].stories.tsx
```

## 📝 脚本说明

与 Dumi 文档站点脚本保持一致的命名规范：

| 脚本 | 功能 | 类比 |
|------|------|------|
| `dev:storybook` | 开发模式 | `dev` |
| `build:storybook` | 构建静态文件 | `build:site` |
| `preview:storybook` | 预览构建结果 | `preview:site` |
| `deploy:storybook` | 部署到 GitHub Pages | `deploy:site` |

## ⚙️ 配置特性

- ✅ TypeScript 支持 (`moduleResolution: bundler`)
- ✅ 自动生成文档
- ✅ 交互式控件
- ✅ 无障碍测试 (a11y)
- ✅ 环境变量支持 (`STORYBOOK_BUILD_ENV`)
- ✅ 组件自动导入样式
- ✅ 已修复模块解析问题

## 🎨 Stories 编写规范

每个组件的 stories 文件位于组件目录下，命名为 `ComponentName.stories.tsx`：

```typescript
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ComponentName from './index';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    // 属性控制器配置
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 默认属性
  },
};
```

## 🔧 关键修复

### TypeScript 配置
更新 `tsconfig.json` 以支持新的模块解析：
- `moduleResolution: "bundler"`
- `module: "esnext"`

### 类型导入
使用正确的类型导入路径：
```typescript
import type { Meta, StoryObj } from '@storybook/react-webpack5';
```

### 依赖包
安装必要的依赖：
- `@storybook/react` - React 类型支持

## 🌍 环境变量

- `STORYBOOK_BUILD_ENV=PREVIEW` - 预览模式配置
- 生产构建输出目录：`storybook-static/`

## 📚 访问地址

- 开发环境：http://localhost:6006
- 预览环境：通过 `serve` 启动的本地服务器

## 🚨 故障排除

如果遇到类型错误：
1. 确保使用正确的类型导入 `@storybook/react-webpack5`
2. 检查 `tsconfig.json` 中的 `moduleResolution` 设置
3. 确保安装了 `@storybook/react` 依赖