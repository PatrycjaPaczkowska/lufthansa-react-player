import { useState } from "react";
import styled, { css } from "styled-components";

import LoginForm from "../components/LoginForm";

export interface DataProps {
	login: string;
	password: string;
}

export const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;

	form {
		display: flex;
		flex-direction: column;
		width: 30%;

      div {
			margin-top: 10px;
			text-align: right;
		}
	}
`;

const defaultData: DataProps = {
	login: "",
	password: "",
};

const LoginView = () => {
	const [data, setData] = useState(defaultData);

	const onLogin = (dataDraft: DataProps) => {
		setData(dataDraft);
	};

	return (
		<ContainerStyle>
			<h1 data-testid="login">Logging</h1>
			<LoginForm onLogin={onLogin} />
			<div>
				<p>{data.login && `Login: ${data.login}`}</p>
				<p>{data.password && `Pass: ${data.password}`}</p>
			</div>
		</ContainerStyle>
	);
};

export default LoginView
