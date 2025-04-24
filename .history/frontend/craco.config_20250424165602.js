module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Modify entry points to include .jsx
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        const tsxRule = oneOfRule.oneOf.find(
          (rule) => rule.test && rule.test.toString().includes('tsx')
        );
        if (tsxRule) {
          tsxRule.test = /\.(js|jsx|ts|tsx)$/;
        }
      }

      // Update entry point to look for index.jsx
      if (typeof webpackConfig.entry === 'string') {
        webpackConfig.entry = webpackConfig.entry.replace(
          'index.js',
          'index.jsx'
        );
      } else if (Array.isArray(webpackConfig.entry)) {
        webpackConfig.entry = webpackConfig.entry.map((entry) =>
          typeof entry === 'string'
            ? entry.replace('index.js', 'index.jsx')
            : entry
        );
      }

      return webpackConfig;
    },
  },
};
