import {createSSRApp} from "vue";
import App from "./App.vue";
import 'virtual:svg-icons-register';

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
