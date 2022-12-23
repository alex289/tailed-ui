import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => (
  <Button onClick={args.onclick} {...args}>
    {args.label}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello world',
  onclick: action('clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  disabled: true,
};
