import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthApi } from "../../api/auth";
import { CContainer } from '@coreui/react';

const ConfirmToken = (props: any) => {

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
			<div className="loginWrapper">
				<h1 className="text-center mb-5 loginHeader">
					{t('remote.'+messageCode)}
				</h1>
			</div>
		</CContainer>
	);
}

export default ConfirmToken;
