#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ react-weather-cli

	Options
		--city  A city name
  -- unit acceptable values = metric or imperial

	Examples
	  $ react-weather-cli --city=Tokyo --unit=metric
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
