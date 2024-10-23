
import { anonApiCall } from "./apiCalls";

/** Realiza el login mediante username/password */
export const sendMessageS = (username: string, password: string): Promise<any> => {

	return new Promise((resolve, reject) => {

		const params = {
			email: username,
			password
		};
		
		anonApiCall.post("/user/auth/signin", params, {
			//AxiosRequestConfig parameter
			withCredentials: false //correct
		  })
			.then(async ({ data, status }) => { resolve(data); })
			.catch((error) => { reject(processError(error)); })
	});
}


const processError = (error: any) => {
    if (error.response) {
        const serverError = error.response.data;
        if(serverError.statusCode === 403) {
            return 'error.0003';
        }
		else if(serverError.statusCode === 500) {
            return 'error.0001';
        }
		else if(serverError.statusCode === 400) {
            return 'error.'+serverError.message;
        }
        return serverError.message;
    } else if (error.request) {
        return 'error.0002';
    } else {
        return 'error.0001';
    }
}