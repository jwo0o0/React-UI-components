import React from "react";
import { Tab } from "../components/Tab";

export default {
    title: "My UI components/Tab",
    component: Tab,
}

const Template = (args) => <Tab {...args} />

export const My_Tab = Template.bind({});
My_Tab.args = {
    primary: true,
    label: 'Tab',
}