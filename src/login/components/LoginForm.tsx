import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import useInput from "../../core/hooks/useInput";
import { Button } from "../../stories/Button";
import { DataProps } from "../containers/LoginView";

export interface InputProps {
	type: string;
	error: string;
	value: string | React.Dispatch<React.SetStateAction<string>>;
	onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const InputStyle = styled.input<InputProps>`
	margin: 5px 0;
	padding: 5px;
	border: 1px solid black;
	border-radius: 5px;
	border-color: ${(props) => (props.error ? "red" : "black")};
`;

export interface LoginFormProps {
	onLogin: (dataDraft: DataProps) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {

	const loginInput = useInput("", (value: string) => {
		if (value.length < 3) return ("log err");
		else return "";
	});
	const passwordInput = useInput("",(value: string) => {
		if (value.length < 3) return ("pass err");
		else return "";
	});


	const onLoginButton = (e: any) => {
		e.preventDefault();

      loginInput.validation(loginInput.props.value);
      passwordInput.validation(passwordInput.props.value);

		if (loginInput.props.error !== "" || passwordInput.props.error) return;
		else {
			onLogin({
				login: loginInput.props.value,
				password: passwordInput.props.value,
			});
			loginInput.reset();
			passwordInput.reset();
		}
	};



	return (
		<form>
			<InputStyle
				aria-label="login"
				type="text"
				placeholder="Login"

				{...loginInput.props}
			/>
			<InputStyle
				aria-label="password"
				type="password"
				placeholder="Password"

				{...passwordInput.props}
			/>
			<div>
				<Button aria-label="LoginButton" onClick={onLoginButton} size="large" label="Login" />
			</div>
			<p>{loginInput.props.error.length ? loginInput.props.error : null}</p>
			<p>{passwordInput.props.error.length ? passwordInput.props.error : null}</p>
		</form>
	);
};

export default LoginForm;
