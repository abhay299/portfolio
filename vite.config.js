import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

dotenv.config(); // load env vars from .env

export default defineConfig({
	plugins: [react(), svgr()],
	define: {
		"process.env": {
			...process.env,
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
