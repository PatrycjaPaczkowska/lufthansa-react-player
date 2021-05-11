import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import useInput from "../../core/hooks/useInput";
import { Button } from "../../stories/Button";
import { DataProps } from "../containers/LoginView";

export interface InputProps {
	type: string;
	error: boolean;
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
	const [error, setError] = useState("");

	const loginInput = useInput("");
	const passwordInput = useInput("");

   const validation = (value:string) => {
      if (value.length < 3) setError("Your login or password is too short. Minimum 3 characters.")
      else setError("");
   }

	const onLoginButton = (e: any) => {
		e.preventDefault();

      validation(loginInput.value);
      validation(passwordInput.value);

		if (error !== "") return;
		else {
			onLogin({
				login: loginInput.value,
				password: passwordInput.value,
			});
			loginInput.reset();
			passwordInput.reset();
         setError("");
		}
	};

   const onBlurError = (e: any) => {
      validation(e.target.value);
   }

	return (
		<form>
			<InputStyle
				aria-label="login"
				type="text"
				placeholder="Login"
				error={error.length ? true : false}
				value={loginInput.value}
				onChange={loginInput.onChange}
            onBlur={onBlurError}
			/>
			<InputStyle
				aria-label="password"
				type="password"
				placeholder="Password"
				error={error.length ? true : false}
				value={passwordInput.value}
				onChange={passwordInput.onChange}
            onBlur={onBlurError}
			/>
			<div>
				<Button aria-label="LoginButton" onClick={onLoginButton} size="large" label="Login" />
			</div>
			<p>{error.length ? error : null}</p>
		</form>
	);
};

export default LoginForm;
