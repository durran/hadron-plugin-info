import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HadronPluginInformationComponent from '../src/components/Hadron Plugin Information';
import ConnectedHadronPluginInformationComponent from '../src/components/';

storiesOf('HadronPluginInformationComponent', module)
  .add('connected to store', () => <ConnectedHadronPluginInformationComponent />)
  .add('enabled', () => <HadronPluginInformationComponent status="enabled" />)
  .add('disabled', () => <HadronPluginInformationComponent status="disabled" />);
