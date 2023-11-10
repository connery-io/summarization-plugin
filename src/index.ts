import { PluginDefinition } from '@connery-io/sdk';
import summarizePublicWebpage from './actions/summarizePublicWebpage';
import summarizeText from './actions/summarizeText';

const plugin: PluginDefinition = {
  title: 'Summarization plugin',
  description: 'Summarization plugin for Connery.',
  actions: [summarizePublicWebpage, summarizeText],
  configurationParameters: [],
  maintainers: [
    {
      name: 'Connery',
      email: 'support@connery.io',
    },
  ],
  connery: {
    runnerVersion: '0',
  },
};
export default plugin;
