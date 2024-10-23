import axios from 'axios';
import Configuration from '../configuration/config';
import { authRequest, authResponse, requestError } from './interceptors';

const API_URL = Configuration.API_URL;

// Llamadas que requeriran de auth token
export const authApiCall = axios.create({
	withCredentials: true,
	baseURL: API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

// Llamadas que no requeriran de auth token
export const anonApiCall = axios.create({
	baseURL: API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});


// Interceptor antes de enviar una petición
authApiCall.interceptors.request.use(authRequest, requestError);

// Interceptor antes de procesar la respuesta recibida
authApiCall.interceptors.response.use(authResponse);