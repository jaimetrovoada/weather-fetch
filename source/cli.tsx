#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ react-weather-cli

	Options
		--name  Your name

	Examples
	  $ react-weather-cli --name=Jane
	  Hello, Jane
`, {
  flags: {
    city: {
      type: 'string'
    },
    unit: {
      type: 'string'
    }
  }
});

render(<App city={cli.flags.city} unit={cli.flags.unit} />);
