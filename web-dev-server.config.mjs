// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
// import { LitElement } from 'lit';
import { rollupAdapter, fromRollup } from '@web/dev-server-rollup';
import commonjs from '@rollup/plugin-commonjs';
import rollupReplace from '@rollup/plugin-replace';

const replace = fromRollup(rollupReplace);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  esbuildTarget: 'auto',

  /** Set appIndex to enable SPA routing */
  appIndex: './public/index.html',

  /** Confgure bare import resolve plugin */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
    exclude: [],
    preferBuiltins: true,
  },

  plugins: [
    /** rollup plugins **/
    //replace({ include: ['src/**/*.js'], __environment__: '"development"', preventAssignment: true }),
    // rollupAdapter(commonjs())
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
