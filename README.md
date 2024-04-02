# Summarization plugin

Summarize text and public webpages using OpenAI API.

When configuring the plugin, we recommend using the LLM model with a context window size of 16k tokens or more.
This will let you summarize webpages and long texts.

At the moment of writing, the most balanced model is `gpt-3.5-turbo-1106` in terms of price and quality.
The full list of models can be found [here](https://platform.openai.com/docs/models).

## Repository structure

This repository contains the plugin's source code.

| Path                            | Description                                                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [./src/index.ts](/src/index.ts) | **The entry point for the plugin.** It contains the plugin definition and references to all the actions.                                             |
| [./src/actions/](/src/actions/) | **This folder contains all the actions of the plugin.** Each action is represented by a separate file with the action definition and implementation. |

## Built using Connery SDK

This plugin is built using [Connery SDK](https://github.com/connery-io/connery), an open-source project for plugin development.

[Learn how to use the plugin and its actions.](https://sdk.connery.io/docs/quickstart/use-plugin)

## Support

If you have any questions or need help with this plugin, please create an issue in this repository.
