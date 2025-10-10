import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: {
    main: "./src/js/main.js",
    screen5: "./src/js/screen5.js",
    screen6: "./src/js/screen6.js",
    about: "./src/js/about.js",
    service: "./src/js/service.js",
    cardsPopUp: "./src/js/cardsPopUp.js",
    gallery: "./src/js/gallery.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
};
