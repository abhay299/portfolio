import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			treeshake: true,
		},
	},
	server: {
		port: 3000,
	},
	envPrefix: "REACT_APP_",
	css: {
		modules: {
			localsConvention: "dashes",
		},
	},
	assetsInclude: ["**/*.JPG", "**/*.jpeg", "**/*.png", "**/*.svg"],
});
