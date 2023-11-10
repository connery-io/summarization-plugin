import { PluginDefinition } from '@connery-io/sdk';
import summarizePublicWebpage from './actions/summarizePublicWebpage';
import summarizeText from './actions/summarizeText';

const plugin: PluginDefinition = {
  title: 'Summarization plugin',
  description: 'Summarization plugin for Connery.',
  actions: [summarizePublicWebpage, summarizeText],
  configurationParameters: [
    {
      key: 'openAiApiKey',
      title: 'OpenAI API key',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'openAiModel',
      title: 'OpenAI model',
      description: 'Find the list of available models here: https://platform.openai.com/docs/models',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
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
