import React from 'react';
import Alert from '../components/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args}>{args.label}</Alert>;

export const Info = Template.bind({});
Info.args = {
  label: 'Change a few things up and try submitting again.',
  color: 'info',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Change a few things up and try submitting again.',
  color: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Change a few things up and try submitting again.',
  color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Change a few things up and try submitting again.',
  color: 'warning',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Change a few things up and try submitting again.',
  color: 'dark',
};
