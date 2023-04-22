import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onclick: { action: 'clicked' } },
  tags: ['autodocs'],
};

const Template = ({ onclick, label, ...args }) => (
  <Button onClick={onclick} {...args}>
    {label}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Hello world',
  disabled: false,
  loading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Hello world',
  color: 'dark',
  disabled: false,
  loading: false,
};

export const Light = Template.bind({});
Light.args = {
  label: 'Hello world',
  color: 'light',
  disabled: false,
  loading: false,
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Hello world',
  color: 'purple',
  disabled: false,
  loading: false,
};

export const Red = Template.bind({});
Red.args = {
  label: 'Hello world',
  color: 'red',
  disabled: false,
  loading: false,
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'Hello world',
  color: 'yellow',
  disabled: false,
  loading: false,
};

export const Green = Template.bind({});
Green.args = {
  label: 'Hello world',
  color: 'green',
  disabled: false,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  disabled: true,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Hello world',
  disabled: true,
  loading: false,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: 'Hello world',
  disabled: false,
  loading: false,
  className:
    'bg-slate-700 dark:bg-slate-600 text-white disabled:bg-slate-400 disabled:dark:bg-slate-500',
};
