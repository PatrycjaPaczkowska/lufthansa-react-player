import { Meta, Story } from "@storybook/react";
import React from "react";
import LoginForm, { LoginFormProps } from "./LoginForm";
import { ContainerStyle } from "../containers/LoginView";

export default {
	title: "LoginView/Form",
	component: LoginForm,
	decorators: [(Story) => <ContainerStyle>{Story()}</ContainerStyle>],
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
