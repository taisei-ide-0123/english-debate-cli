import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import { gptModel } from "./utils/constants";

const ask = async (openai: OpenAIApi, content: string) => {
  const response = await openai.createChatCompletion({
    model: gptModel,
    messages: [{ role: "user", content: content }],
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
};

const main = () => {
  dotenv.config();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const question = "Can you tell me what chatGPT is";
  ask(openai, question);
};

main();
