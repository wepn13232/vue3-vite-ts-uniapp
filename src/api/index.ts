/**
 * 封装具体的接口请求（使用uniapp官方提供的api进行请求 https://uniapp.dcloud.net.cn/api/request/request.html#request）
 * */

const header: any = {};

// 添加请求、响应拦截（https://uniapp.dcloud.net.cn/api/interceptor.html#addinterceptor）
uni.addInterceptor("request", {
	// request触发前进行的操作
	invoke: () => {
		// if (!token) {
		// 	console.warn("用户未登录");
		// } else {

		// }
	},
	// 请求成功，进行处理的事务（响应拦截）
	success: (args) => {
		const data = args.data;
		if (data.code === 401) { //用户没有权限进行接口执行
			console.warn("用户没有权限执行接口");
		}
	},
	fail: (err) => {
		console.error("请求拦截失败：", err);
		return false;
	},
});


// url请求地址，method请求方法，data请求的数据，contentType请求头格式，isAllowMultiple是否允许短时间内多次请求
const fetch = (url: string, method: any, data: Record<string, any>, contentType?: string, isAllowMultiple: boolean = false) => {
	header["content-type"] = contentType || "application/json"; //默认为json格式，如果POST请求为application/x-www-form-urlencoded，则转换为query string格式

	return new Promise<any>((resolve, reject) => {
		uni.request({
			url: import.meta.env.VITE_API_BASE_URL + url,
			data: data,
			header: header,
			method: method || "GET",
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				console.log("请求接口失败", err);
				reject(err);
			}
		});
	});
};

/**
 * 封装不同methods的接口请求
 * */
class RequestHttp {
	get<T>(url: string, data: Record<string, any>, contentType?: string): Promise<Result<T>> {
		return fetch(url, "get", data, contentType);
	}
}

export default new RequestHttp();
