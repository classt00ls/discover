import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthApi } from "../../api/auth";
import { CContainer, CSpinner } from '@coreui/react';

const VerifyToken = () => {

	const { t } = useTranslation()
	let [searchParams, setSearchParams] = useSearchParams();
	let [messageCode, setMessageCode] = useState('0001');

	//Listening for logging in process, for showing spinner
	useEffect(() => {
		let isMounted = true;
      	(async () => {
			const token = searchParams.get("token");
			if(token !== null && isMounted){
				try {
					const response = await AuthApi.verifyToken(token);
					setMessageCode(response.code);
				} catch (error) {
					setMessageCode(error);
				}
			} 
		})();
		return () => { isMounted = false };
	}, [])


	return (
		<CContainer sm className="loginContainer">
			<div className="d-flex justify-content-center">
				<CSpinner component="span" aria-hidden="true" color="warning" />
			</div>
		</CContainer>
	);
}

export default VerifyToken;
