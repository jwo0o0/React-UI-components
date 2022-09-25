import React from "react";
import { Tag } from "../components/Tag";

export default {
    title: "My UI components/Tag",
    component: Tag,
}

const Template = (args) => <Tag {...args} />

export const My_Tag = Template.bind({});
My_Tag.args = {
    primary: true,
    label: 'Tag'
}