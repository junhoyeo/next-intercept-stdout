const intercept = require('intercept-stdout');

const withInterceptStdout = (config, ...props) => {
  intercept(...props);
  return config;
};

module.exports = withInterceptStdout
