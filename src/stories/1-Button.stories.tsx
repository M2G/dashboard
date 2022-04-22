/*eslint-disable*/
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: '1-Button',
  component: Button,
};
// @ts-ignore
export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  // @ts-ignore
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
