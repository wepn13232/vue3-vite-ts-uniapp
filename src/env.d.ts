/// <reference types="vite/client" />

declare module '*.vue' {
	import {DefineComponent} from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare interface ViteEnv {
	VITE_API_URL: string, //不同环境下的api接口前缀
	VITE_API_BASE_URL: string, //不同环境下的接口ip，端口
}


declare const __APP_INFO__: {
	lastBuildTime: string
};


