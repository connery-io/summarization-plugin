# Summarization plugin

Summarize text and public webpages using OpenAI API.

When configuring the plugin on the runner, we recommend using the LLM model with a context window size of 16k tokens or more. This will let you summarize webpages and long texts.

At the moment of writing, the most balanced model is `gpt-3.5-turbo-1106` in terms of price and quality.
The full list of models can be found [here](https://platform.openai.com/docs/models).

## Available actions

| Action                                                             | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| [Summarize public webpage](/src/actions/summarizePublicWebpage.ts) | Summarize public webpage. |
| [Summarize text](/src/actions/summarizeText.ts)                    | Summarize a long text.    |

## Repository structure

The entry point for this plugin is the [./src/index.ts](/src/index.ts) file.
It contains the plugin definition and references to all the actions.

The [./src/actions/](/src/actions/) folder contains all the actions this plugin defines.
Every action is represented by a separate file with the action definition and implementation.

The [./dist/plugin.js](/dist/plugin.js) file is the bundled version of the plugin with all the dependencies.
Connery Platform uses this file to run the plugin.

## Connery

This repository is a plugin for [Connery](https://connery.io).

Connery is an open-source plugin ecosystem for AI and No-Code.

Learn more about Connery:

- [Documentation](https://docs.connery.io)
- [Source code](https://github.com/connery-io/connery-platform)
- [How to start using this plugin with Connery?](https://docs.connery.io/docs/platform/quick-start/)

## Support

If you have any questions or need help with this plugin, please create an issue in this repository.
