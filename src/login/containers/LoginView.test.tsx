import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LoginView from "./LoginView";

describe("LoginView", () => {
	const setup = () => {
     		const { rerender } = render(<LoginView />);
		return { rerender };
	};

	test("display header 'Logging'", () => {
		setup();
		expect(screen.getByTestId("login")).toBeInTheDocument();
	});
});
