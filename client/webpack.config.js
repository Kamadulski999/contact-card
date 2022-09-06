const path = require("path");
const { ModuleFilenameHelpers } = require("webpack");


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist",)
    },
    mode: "development",
};