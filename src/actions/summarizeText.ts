import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';

const action: ActionDefinition = {
  key: 'summarizeText',
  title: 'Summarize text',
  description: 'Summarize a long text using OpenAI API.',
  type: 'read',
  inputParameters: [],
  operation: {
    handler: handler,
  },
  outputParameters: [],
};
export default action;

export async function handler({
  inputParameters,
  configurationParameters,
}: ActionContext): Promise<OutputParametersObject> {
  // TODO: Implement the action logic.

  return {};
}
