export default {
  esm: 'babel',
  cjs: 'rollup',
  umd: {
    globals: {
      react: 'React', // 这跟external 是配套使用的，指明global.React即是外部依赖react
    },
  },
  extractCSS: true,
  lessInBabelMode: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
