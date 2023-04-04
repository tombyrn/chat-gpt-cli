#!/usr/bin/env node
let prompt = "";
for(let i = 2; i < process.argv.length; i++){
    prompt += process.argv[i] + ' '
}
if(process.argv.length <= 2 || prompt.trim().length == 0){
    console.error('No prompt provided to ChatGPT')
    process.exit(1)
}

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: require('./env'),
});
const openai = new OpenAIApi(configuration);

async function generateText() {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0,
        max_tokens: 1500,
    });

    if(response.data.choices[0].text){
        console.log('===================== Chat-GPT =====================')
        console.log(response.data.choices[0].text.toString())
        console.log('\n')
    }
    else{
        console.error('No response generated')
    }

}

generateText();
