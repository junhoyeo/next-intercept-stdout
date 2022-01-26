# next-intercept-stdout
[![next-intercept-stdout](https://img.shields.io/npm/v/next-intercept-stdout?style=for-the-badge)](https://www.npmjs.com/package/next-intercept-stdout)

Next.js plugin to intercept stdout

## Ignore `Duplicate atom key` warnings for [Recoil](https://github.com/facebookexperimental/Recoil/issues/733#issuecomment-925072943)

```tsx
// next.config.js
const withInterceptStdout = require('next-intercept-stdout');

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);
```
> Usage with the `NextConfig` Object

```tsx
// next.config.js
const withInterceptStdout = require('next-intercept-stdout');
const withSvgr = require('@newhighsco/next-plugin-svgr');

module.exports = withInterceptStdout(
  withSvgr({
    reactStrictMode: true,
    svgrOptions: {},
  }),
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);
```
> Usage with other Next.js plugins
