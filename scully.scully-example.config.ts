import { ScullyConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
import './scully/plugins/plugin';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-example',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
    '/dynamic-page/:id': {
      type: 'dynamicPagePlugin',
    },
  },
};
