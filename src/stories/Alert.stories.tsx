import React from 'react';
import Alert from '../Alert';

export default {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Info Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'info',
  icon: true,
  showCloseButton: true,
};

export const Danger = Template.bind({});
Danger.args = {
  title: 'Danger Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'danger',
  icon: true,
  showCloseButton: true,
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'success',
  icon: true,
  showCloseButton: true,
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'warning',
  icon: true,
  showCloseButton: true,
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Dark Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'dark',
  icon: true,
  showCloseButton: true,
};

export const Outline = Template.bind({});
Outline.args = {
  title: 'Outline Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'danger',
  icon: true,
  outline: 'active',
  border: 'active',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Dark Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'dark',
  icon: true,
  showCloseButton: true,
  className:
    'bg-slate-500 text-white border border-slate-500 dark:bg-slate-800 dark:border-slate-800',
};
