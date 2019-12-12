import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from '../src/storybook-inspect-html';

export default [
  withKnobs,
  withInspectHtml,
  withA11y,
];
