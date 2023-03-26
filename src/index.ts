import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { exit } from "process";
import { getDottedLine, makeDottedLine } from "./utils/lines";
import { getInputs } from "./cli-parser";
import { gptModel } from "./utils/constants";
import {
  grammarReviewRequest,
  Message,
  requestExamples,
  requestOpinionReview,
} from "./utils/messages";

const ask = async (openai: OpenAIApi, messages: Array<Message>) => {
  const response = await openai.createChatCompletion({
    model: gptModel,
    messages: messages,
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
};

const debate = async (openai: OpenAIApi) => {
  const requestMessages = [];

  // Required the inputs of the topic and opinion that a user would like to discuss.
  const [topic, opinion] = await getInputs();

  const feedbackRequest = requestOpinionReview(topic, opinion);
  requestMessages.push(feedbackRequest);
  console.log("Reviewing your opinion ...\n");
  await ask(openai, requestMessages);

  makeDottedLine();
  console.log("Requesting the grammar review ...");
  makeDottedLine();

  requestMessages.push(grammarReviewRequest);
  await ask(openai, requestMessages);

  makeDottedLine();
  console.log(
    `Requesting examples of arguments from both perspectives, supporting and opposing ${topic} ...`
  );
  makeDottedLine();

  const examplesRequest = requestExamples(topic);
  requestMessages.push(examplesRequest);
  await ask(openai, requestMessages);

  console.log("It was nice talking with you! See you later!");
};

const main = async () => {
  dotenv.config();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  await debate(openai);

  console.log("debate end");
  process.exit();
};

main();
