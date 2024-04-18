import { PluginDefinition, setupPluginServer } from 'connery';
import summarizePublicWebpage from './actions/summarizePublicWebpage.js';
import summarizeText from './actions/summarizeText.js';

const pluginDefinition: PluginDefinition = {
  title: 'Summarization plugin',
  description: 'Summarize text and public webpages using OpenAI API.',
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
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
