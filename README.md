# next-intercept-stdout
[![next-intercept-stdout](https://img.shields.io/npm/v/next-intercept-stdout?style=for-the-badge)](https://www.npmjs.com/package/next-intercept-stdout)

Next.js plugin to intercept stdout

## Justification
1. 💎 This module wraps [`intercept-stdout`](https://github.com/sfarthin/intercept-stdout) as the form of the **Next.js plugin.**
2. 🙋🏽 Why wrap this module?
   1. I didn't want to call a function separate from other `NextConfig` values and plugins. It makes the action look suspicious and less coupled.
   2. In addition, `intercept-stdout` was last distributed about six years ago, so it seemed necessary to cover the implementation separately in case it no longer works.

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
