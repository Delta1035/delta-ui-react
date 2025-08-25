import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import through2 from 'through2';
const paths = {
  dest: {
    lib: 'lib', // commonjs产物
    esm: 'esm', // esm产物
    dist: 'dist', // umd产物
  },
  styles: 'src/**/*.less', // 样式文件路径
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}', '!src/**/__tests__/*.{ts.tsx}'], // 脚本文件路径
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compilerScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv; // 设置BABEL_ENV环境变量
  return gulp
    .src(scripts)
    .pipe(babel())
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
          file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(destDir));
}

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css');
}

function compilerCJS() {
  const { dest } = paths;
  return compilerScripts('cjs', dest.lib);
}

function compilerESM() {
  const { dest } = paths;
  return compilerScripts('esm', dest.esm);
}

function copyLess() {
  const { dest } = paths;
  return gulp.src(paths.styles).pipe(gulp.dest(dest.lib)).pipe(gulp.dest(dest.esm));
}

function lessToCss() {
  const { dest, styles } = paths;
  return (
    gulp
      .src(styles)
      .pipe(less())
      // 根据browserList增加前缀
      .pipe(autoprefixer())
      .pipe(
        cssnano({
          zindex: false, // 解决cssnano压缩样式时，出现的z-index问题
          reduceIdents: false, // 解决cssnano压缩样式时，出现的动画名问题
        }),
      )
      .pipe(gulp.dest(dest.esm))
      .pipe(gulp.dest(dest.lib))
  );
}

// 串行执行，避免环境变量冲突
const buildScripts = gulp.series(compilerCJS, compilerESM);
// 并行执行任务
export const build = gulp.parallel(buildScripts, copyLess, lessToCss);
export default build;
