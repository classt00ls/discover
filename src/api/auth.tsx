import { authApiCall } from "./apiCalls";
import store from "../store/store";
import { LOGOUT_REQUEST, TOKEN_VERIFIED } from "../store/actions/authActions";


/** Verifica el token al llegar desde la web */
const verifyToken = (token: string): Promise<any> => {
	return new Promise((resolve, reject) => {
        let params = {token};

		authApiCall.get("/discover/auth/verifyToken", { params })
			.then((response) => {
                store.dispatch({type: TOKEN_VERIFIED.type, payload: response.data});
                resolve(response.data);
            })
			.catch((error) => reject(processError(error)))
	});
}


const processError = (error: any) => {
    if (error.response) {
        const serverError = error.response.data;
        if(serverError.statusCode === 403) {
            store.dispatch({type: LOGOUT_REQUEST.type});
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


export const AuthApi = {
    verifyToken
  };
