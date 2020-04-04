import { ApplyPluginsType } from 'D:/codeTest/react-study/dumi-library/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('D:/codeTest/react-study/dumi-library/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Hello dumi!","meta":{}},{"title":"Foo","path":"/foo","meta":{},"children":[]},{"title":"Card-list","path":"/card-list","meta":{},"children":[{"path":"/card-list","title":"CardList","meta":{}}]},{"title":"Header-sw","path":"/header-sw","meta":{},"children":[{"path":"/header-sw","title":"Header","meta":{}}]}]}},"locales":[],"navs":{},"title":"zzc的组件","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/card-list",
        "component": require('../../card-list/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/card-list/index.md",
          "updatedTime": 1585925737158,
          "slugs": [
            {
              "depth": 2,
              "value": "CardList",
              "heading": "cardlist"
            }
          ],
          "title": "CardList",
          "group": {
            "path": "/card-list",
            "title": "Card-list"
          }
        },
        "title": "CardList"
      },
      {
        "path": "/foo",
        "component": require('../../foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/foo/index.md",
          "updatedTime": 1585836725650,
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "group": {
            "path": "/foo",
            "title": "Foo"
          }
        },
        "title": "Foo"
      },
      {
        "path": "/header-sw",
        "component": require('../../HeaderSw/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/HeaderSw/index.md",
          "updatedTime": 1585842426517,
          "slugs": [
            {
              "depth": 2,
              "value": "Header",
              "heading": "header"
            }
          ],
          "title": "Header",
          "group": {
            "path": "/header-sw",
            "title": "Header-sw"
          }
        },
        "title": "Header"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585836725597,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      }
    ],
    "title": "zzc的组件"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
