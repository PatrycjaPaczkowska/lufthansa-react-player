import { Meta, Story } from "@storybook/react";
import React from "react";
import LoginView from "./LoginView";

export default {
	title: "LoginView/View",
	component: LoginView,
} as Meta;

const Template: Story = (args) => <LoginView {...args} />;
