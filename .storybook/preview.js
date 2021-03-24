import React from 'react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';

import '../src/stories/Story.style.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  story => <div className="story">{story()}</div>,
  (storyFn, context) => withConsole()(storyFn)(context),
];

addParameters(withA11y);
addParameters({
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'muted',
        value: '#eaeaea',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  }
})
