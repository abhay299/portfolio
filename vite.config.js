import path from "path";

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		svgr(),

		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
			filename: "stats.html",
		}),
	],

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],

		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	build: {
		target: "esnext",

		minify: "esbuild",

		cssCodeSplit: true,

		chunkSizeWarningLimit: 1000,

		rollupOptions: {
			treeshake: true,

			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (id.includes("react")) {
							return "react-vendor";
						}

						if (id.includes("framer-motion")) {
							return "motion";
						}

						if (id.includes("@mui")) {
							return "mui";
						}

						if (id.includes("ogl")) {
							return "ogl";
						}

						return "vendor";
					}
				},
			},
		},
	},

	server: {
		port: 3000,
	},

	css: {
		modules: {
			localsConvention: "dashes",
		},
	},

	assetsInclude: [
		"**/*.JPG",
		"**/*.jpeg",
		"**/*.png",
		"**/*.webp",
		"**/*.svg",
	],
});
