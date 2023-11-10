import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import * as cheerio from 'cheerio';
import axios from 'axios';
import OpenAI from 'openai';

const action: ActionDefinition = {
  key: 'summarizePublicWebpage',
  title: 'Summarize public webpage',
  description: 'Summarize public webpage.',
  type: 'read',
  inputParameters: [
    {
      key: 'publicWebpageUrl',
      title: 'Public webpage URL',
      description: 'The URL of the public webpage to summarize.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'customInstructions',
      title: 'Custom instructions',
      description:
        'Use custom instructions if you want to customize the summarization. Leave empty to use the default instructions.',
      type: 'string',
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [
    {
      key: 'summary',
      title: 'Summary',
      description: 'The summary of the public webpage.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};
export default action;

export async function handler({
  inputParameters,
  configurationParameters,
}: ActionContext): Promise<OutputParametersObject> {
  // Fetch the HTML content from the provided URL
  const response = await axios.get(inputParameters.publicWebpageUrl);
  const html = response.data;

  // Parse the HTML content and extract the text
  const $ = cheerio.load(html);
  const textToSummarize = $('body').text();

  const systemInstructions =
    inputParameters.customInstructions || 'Provide a concise, neutral summary of the essential points.';
  const prompt = `Text to summarize: ${textToSummarize}\n\nSummary:`;

  const openai = new OpenAI({
    apiKey: configurationParameters.openAiApiKey,
  });

  const completion = await openai.chat.completions.create({
    model: configurationParameters.openAiModel,
    temperature: 0.7,
    messages: [
      { role: 'system', content: systemInstructions },
      { role: 'user', content: prompt },
    ],
  });

  return {
    summary: completion.choices[0].message.content,
  };
}
