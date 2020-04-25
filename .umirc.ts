import { defineConfig } from "dumi";

export default defineConfig({
  mode: "site",
  title: "zzc的组件",
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
      "antd",
    ],
  ],
  // more config: https://d.umijs.org/config
});
