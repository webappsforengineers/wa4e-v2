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
    'public/index.html': './public/index.html',
    'public/app_modules/caisson/index.html':
      './public/app_modules/caisson/index.html',
    'public/app_modules/consolidated-ncv/index.html':
      './public/app_modules/consolidated-ncv/index.html',
    'public/app_modules/drag-anchor/index.html':
      './public/app_modules/drag-anchor/index.html',
    'public/app_modules/mcc-su/index.html':
      './public/app_modules/mcc-su/index.html',
    'public/app_modules/ncv/index.html': './public/app_modules/ncv/index.html',
    'public/app_modules/pinpiles/index.html':
      './public/app_modules/pinpiles/index.html',
    'public/app_modules/pipe/index.html':
      './public/app_modules/pipe/index.html',
    'public/app_modules/sliding-plet/index.html':
      './public/app_modules/sliding-plet/index.html',
    'public/app_modules/vh2m2t/index.html':
      './public/app_modules/vh2m2t/index.html',
    'public/app_modules/vhm/index.html': './public/app_modules/vhm/index.html',
    'public/app_modules/zti/index.html': './public/app_modules/zti/index.html',
  },
  output: {
    format: 'es',
    dir: 'dist',
    // preserveModules: true,
    // preserveModulesRoot: 'public',
  },

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
  plugins: [
    commonjs(),
    resolve(),
    html(),
    copy({
      targets: [{ src: './public/img/*', dest: './dist' }],
      flatten: false,
    }),
  ],
});
