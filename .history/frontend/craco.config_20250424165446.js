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
      return webpackConfig;
    },
  },
};