import { defineConfig } from 'dumi';
let base: string | undefined = '/delta-ui-react/';
let publicPath: string | undefined = '/delta-ui-react/';
console.log('SITE_BUILD_ENV >>>>>', process.env.SITE_BUILD_ENV);

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  console.log('SITE_BUILD_ENV >>>>>', true);

  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
    docDirs: ['src'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  title: 'Happy UI', // 站点名称
  // mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath,
});
