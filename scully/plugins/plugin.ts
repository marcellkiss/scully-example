import { HandledRoute, registerPlugin } from '@scullyio/scully';

export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('postProcessByHtml', myPlugin, myFunctionPlugin, validator);

function dynamicPagePlugin(
  route: string | undefined,
  config = {}
): Promise<HandledRoute[]> {
  console.log(`[dynamicPagePlugin]`, route, config);
  return Promise.resolve([{ route: '/dynamic-page/9999' }]);
}

registerPlugin('router', 'dynamicPagePlugin', dynamicPagePlugin, validator);
