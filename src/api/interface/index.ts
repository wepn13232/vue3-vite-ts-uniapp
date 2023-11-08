interface Result {
	code: string | number,
	msg: string
}

interface ResultData<T> extends Result {
	data: T;
}
