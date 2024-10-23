
export const authRequest = async (request) => {
	// const token = await localStorage.getItem('@token');
	// console.log('TRACE / authApiCall.interceptors -> Token recovered: ', token);
	// if (token) {
	// 	request.headers.common["Authorization"] = `Bearer ${token}`;
	// } else {
	// 	return Promise.reject('No token founded');
	// }
	// console.log('auth token añadido al request.')
	return request;
}

export const requestError = (error) => {
	if (error && error.response == undefined) {
		console.log('Intercepting Error: ', error);
		return Promise.reject('Interceptor Error.');
	} else if (error && error.response && error.response.status === 401) {
		console.log('Intercepting Error: (401) ', error);
		return Promise.reject(error.response);
	}
}

export const authResponse = async (response) => {
	console.log('TRACE / authApiCall.interceptors -> authResponse ');
	//Store last request timestamp in Local Storage
	localStorage.setItem('sessionTSTP', new Date().getTime().toString());
	if (response.status === 200 || response.status === 201) {
		return Promise.resolve(response);
	} else {
		console.log('Interceptor auth call error: ', response);
		return Promise.reject(response);
	}
}

export const authError = async (error) => {
	console.log('TRACE / authApiCall.interceptors -> authError ');
	console.log('Token expired, refreshing ... ');
	
}

export const anonError = async (error) => {
	console.log(' ************************************** ', error)
	if (error) {
		switch (error) {
			case " Error: Request failed with status code 400":
				console.log('Error 400 detected in interceptor ')
				break;
			default:
				console.log(`Intercepted error. Code: ${error}, message: ${error}`);
		}
		return error;
	}
}