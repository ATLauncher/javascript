import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Button from './Button';

import README from './README.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withReadme(README));

stories.addDecorator(withKnobs);

stories.add(
    'with text',
    () => (
        <Button text={text('Label', 'Hello Button')} onClick={action('clicked')} />
    )
);