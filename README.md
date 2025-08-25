# Delta UI React

一个基于 React 的组件库，使用 dumi 构建文档站点。

## 特性

- 📦 开箱即用的 React 组件
- 🎨 现代化的组件设计
- 📝 基于 dumi 的文档站点
- 🔧 TypeScript 支持
- ⚡ Tree Shaking 支持
- 🧪 Jest 单元测试
- 📦 多格式构建输出 (CJS/ESM)

## 安装

```bash
npm install delta-ui-react
# 或者
pnpm install delta-ui-react
```

## 使用

```tsx
import { Alert } from 'delta-ui-react';

function App() {
  return (
    <Alert message="这是一个警告提示" />
  );
}
```

## 开发

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动文档站点开发环境：

```bash
pnpm dev
```

### 构建

构建组件库：

```bash
pnpm build
```

构建文档站点：

```bash
pnpm build:site
```

构建类型定义：

```bash
pnpm build:types
```

### 测试

运行测试：

```bash
pnpm test
```

监听模式运行测试：

```bash
pnpm test:watch
```

生成测试覆盖率报告：

```bash
pnpm test:coverage
```

更新测试快照：

```bash
pnpm test:update
```

### 部署

部署文档站点到 GitHub Pages：

```bash
pnpm deploy:site
```

### 发布

发布新版本：

```bash
pnpm release
```

## 组件

### Alert 警告提示

警告提示，展现需要关注的信息。

```tsx
import { Alert } from 'delta-ui-react';

<Alert message="这是一个警告提示" />
```

## 构建输出

本项目支持多种模块格式：

- **CommonJS**: `lib/` 目录
- **ES Module**: `esm/` 目录  
- **UMD**: `dist/` 目录

支持 Tree Shaking，样式文件被标记为 side effects 避免被误删除。

## 开发规范

- 使用 TypeScript 开发
- 遵循 ESLint 和 Prettier 代码规范
- 使用 Commitizen 规范提交信息
- 使用 Husky 和 lint-staged 进行代码检查
- 提交前自动运行相关测试

### 提交代码

```bash
pnpm commit
```

## 技术栈

- **React 19**: 组件开发框架
- **TypeScript**: 类型支持
- **dumi**: 文档站点生成
- **Jest**: 单元测试
- **Less**: 样式预处理器
- **Gulp**: 构建工具
- **Babel**: 代码编译
- **ESLint**: 代码检查
- **Prettier**: 代码格式化

## 许可证

ISC License

## 贡献

欢迎提交 Issue 和 Pull Request！