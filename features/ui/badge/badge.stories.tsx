import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./badge";

export default {
  title: "UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color }) => (
  <Badge color={color} size={size}>
    Label
  </Badge>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
