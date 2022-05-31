import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
// import { createSpaConfig } from '@open-wc/building-rollup';
// use createBasicConfig to do regular JS to JS bundling
import { createBasicConfig } from '@open-wc/building-rollup';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import html from '@web/rollup-plugin-html';
import copy from 'rollup-plugin-copy';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  preserveEntrySignatures: 'strict',
  input: {
    'index.html': './src/index.html',
    'admin/createTest.html': './src/admin/createTest.html',
    'app_modules/caisson/index.html': './src/app_modules/caisson/index.html',
    'app_modules/consolidated-ncv/index.html':
      './src/app_modules/consolidated-ncv/index.html',
    'app_modules/drag-anchor/index.html':
      './src/app_modules/drag-anchor/index.html',
    'app_modules/mcc-su/index.html': './src/app_modules/mcc-su/index.html',
    'app_modules/ncv/index.html': './src/app_modules/ncv/index.html',
    'app_modules/pinpiles/index.html': './src/app_modules/pinpiles/index.html',
    'app_modules/pipe/index.html': './src/app_modules/pipe/index.html',
    'app_modules/sliding-plet/index.html':
      './src/app_modules/sliding-plet/index.html',
    'app_modules/vh2m2t/index.html': './src/app_modules/vh2m2t/index.html',
    'app_modules/vhm/index.html': './src/app_modules/vhm/index.html',
    'app_modules/zti/index.html': './src/app_modules/zti/index.html',
  },
  output: {
    format: 'es',
    dir: 'dist',
    // preserveModules: true,
    // preserveModulesRoot: 'src',
  },

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './src/app.js',
  plugins: [
    // html({ rootDir: path.join(process.cwd(), 'src'), flattenOutput: false }),
    html(),
    copy({
      targets: [{ src: './src/img/*', dest: './dist/img/' }],
    }),
    commonjs(),
    resolve(),
  ],
});
