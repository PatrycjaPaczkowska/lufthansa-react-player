import { useState } from "react";

const useInput = (initialValue: string, validation: (value: string) => string) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState("");

	const onChange = (e: any) => {
		setValue(e.target.value);
	};

	const reset = () => {
		setValue(initialValue);
		setError("");
	};


	const onBlur = (e: any) => {
		setError(validation(e.target.value));
	};

	return {
		props: {
			value,
			onChange,
			onBlur,
			error,
		},
		reset,
		validation,
	};
};

export default useInput;
