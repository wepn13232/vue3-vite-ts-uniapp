import http from "@/api/index";


// demo
export const getAllWallet = (data: Record<string, any>) => {
	return http.get("/getAllWallet", data);
};
