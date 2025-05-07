import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export const config: Config = {
  namespace: 'gsl',
  globalStyle: 'src/global/styles/global.scss',
  extras: { dynamicImportShim: true },      // IE / legacy ≈ nomodule build
  rollupPlugins: {
    before: [
      nodeResolve({ browser: true, preferBuiltins: false })
    ]
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        // copy Carbon’s compiled CSS so we don’t rely on CDN
        {
          src: '../node_modules/@carbon/styles/css',
          dest: 'carbon-css'
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'test-assets' },
      ],
    },
  ],
  // optional if you want to predefine style file types
  plugins: [sass({
    includePaths: ['node_modules'],
  }),]
};
