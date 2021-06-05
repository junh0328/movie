import { text } from '@storybook/addon-knobs';

import Button from '.';

export default {
  title: 'Atoms/BillboardButton',
  component: Button,
};

export const Default = () => {
  const name = text('name', 'default');

  return <Button name={name} />;
};
