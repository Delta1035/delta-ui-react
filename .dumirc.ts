import { defineConfig } from 'dumi';
let base: string | undefined = '/delta-ui-react/';
let publicPath: string | undefined = '/delta-ui-react/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  logo: '/logo.png',
  outputPath: 'doc-site', // 输出文件夹
  base,
  publicPath,
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
  },
});
