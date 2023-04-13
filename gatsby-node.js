const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// src 내부 커스텀 경로 설정
exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
        assets: path.resolve(__dirname, "src/assets"),
        icons: path.resolve(__dirname, "src/assets/icons"),
        store: path.resolve(__dirname, "src/store"),
      },
    },
  })
}
