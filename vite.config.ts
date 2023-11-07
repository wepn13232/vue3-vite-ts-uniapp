import {defineConfig, loadEnv} from "vite";
import {resolve} from "path";
import uni from "@dcloudio/vite-plugin-uni";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import dayjs from "dayjs";

// APP相关信息（打包的时候创建）
const __APP_INFO = {
	lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	return {
		plugins: [
			uni(),
			// 用于svg生成为雪碧图
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			})
		],
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
			}
		},
		// 导出公共信息
		define: {
			__APP_INFO: JSON.stringify(__APP_INFO)
		},
		// css公共配置
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/style/common.scss";`
				}
			}
		},
		build: {
			//esbuild打包更快
			minify: "esbuild",
			// 禁用 gzip 压缩大小报告，可略微减少打包时间
			sourcemap: false,
		}
	};
});
