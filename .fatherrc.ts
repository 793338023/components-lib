export default {
  esm: "babel",
  cjs: "babel",
  extractCSS: true,
  lessInBabelMode: true,
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
  ],
};
