# Storybook 配置说明

本项目已成功配置 Storybook 用于组件库的开发和展示。

## 快速开始

### 启动开发服务器
```bash
pnpm run storybook
```

### 构建静态文件
```bash
pnpm run build-storybook
```

## 配置文件

- `.storybook/main.ts` - 主要配置文件
- `.storybook/preview.ts` - 预览配置

## Stories 结构

每个组件的 stories 文件位于组件目录下，命名为 `ComponentName.stories.tsx`。

已创建的示例 stories:
- `src/alert/Alert.stories.tsx` - Alert 组件的所有变体
- `src/form/Form.stories.tsx` - Form 组件的使用示例

## 特性

- 支持 TypeScript
- 自动生成文档
- 交互式控件
- 无障碍测试
- 响应式视图