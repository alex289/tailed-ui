import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({ onclick, label, ...args }) => (
  <Button onClick={onclick} {...args}>
    {label}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  disabled: false,
  loading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'dark',
  disabled: false,
  loading: false,
};

export const Light = Template.bind({});
Light.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'light',
  disabled: false,
  loading: false,
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'purple',
  disabled: false,
  loading: false,
};

export const Red = Template.bind({});
Red.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'red',
  disabled: false,
  loading: false,
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'yellow',
  disabled: false,
  loading: false,
};

export const Green = Template.bind({});
Green.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  color: 'green',
  disabled: false,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  onclick: action('clicked'),
  disabled: true,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Hello world',
  onclick: action('clicked'),
  disabled: true,
  loading: false,
};
