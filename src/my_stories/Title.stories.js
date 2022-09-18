import React from "react";
import Title from "../components/Title";

export default {
    title: "Practice/Title",
    component: Title,
}

const Template = (args) => <Title {...args}/>

export const Title_ex = Template.bind({});
Title_ex.args = {
    primary: true,
    label: 'Title'
}