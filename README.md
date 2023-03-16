# chat-gpt-cli
Access ChatGPT through the Command Line

## Setup
Obtain a OpenAI API KEY. Create a ```env.js``` file in the root directory and put the following line in it ```module.exports = 'YOUR_OPEN_AI_KEY'```

Use ``` npm link ``` to symlink package folder.
```chat-gpt``` command should be available in your shell.

## Example
```
$ chat-gpt how many inches in a mile
===================== Chat-GPT =====================


There are 63,360 inches in a mile.
```
