import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonColor, ButtonSize } from "./button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button size={args.size} color={args.color} disabled={args.disabled}>
    {args.children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button CTA",
  size: ButtonSize.md,
  color: ButtonColor.primary,
  disabled: false,
};
