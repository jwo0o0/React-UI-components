import React from "react";
import {Modal} from "../components/Modal";

export default {
    title: "My UI components/Modal",
    component: Modal,
}

const Template = (args) => <Modal {...args} />

export const My_Modal = Template.bind({});
My_Modal.args = {
    primary: true,
    label: 'Modal'
}