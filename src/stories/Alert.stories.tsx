import React from 'react';
import Alert from '../components/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Info Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'info',
  icon: true,
  onClose: () => console.log('close'),
};

export const Danger = Template.bind({});
Danger.args = {
  title: 'Danger Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'danger',
  icon: true,
  onClose: () => console.log('close'),
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'success',
  icon: true,
  onClose: () => console.log('close'),
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'warning',
  icon: true,
  onClose: () => console.log('close'),
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Dark Alert!',
  message: 'Change a few things up and try submitting again.',
  status: 'dark',
  icon: true,
  onClose: () => console.log('close'),
};
