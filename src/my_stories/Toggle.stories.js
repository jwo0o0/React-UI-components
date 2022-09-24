import React from "react";
import {Toggle} from "../components/Toggle";

export default {
    title: "My UI components/Toggle",
    component: Toggle,
}

const Template = (args) => <Toggle {...args} />

export const My_Toggle = Template.bind({});
My_Toggle.args = {
    primary: true,
    lable: 'Toggle'
}