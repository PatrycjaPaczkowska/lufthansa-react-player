import { useState } from "react";

const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: any) => {
		setValue(e.target.value);
	};

   const reset = () => setValue(initialValue);

	return {value, onChange, reset};
};

export default useInput;
