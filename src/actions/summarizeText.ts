import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import OpenAI from 'openai';

const action: ActionDefinition = {
  key: 'summarizeText',
  title: 'Summarize text',
  description: 'Summarize a long text.',
  type: 'read',
  inputParameters: [
    {
      key: 'textToSummarize',
      title: 'Text to summarize',
      description: 'The text to summarize.',
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
      description: 'The summary of the text.',
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
  const systemInstructions =
    inputParameters.customInstructions || 'Provide a concise, neutral summary of the essential points.';
  const prompt = `Text to summarize: ${inputParameters.textToSummarize}\n\nSummary:`;

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
