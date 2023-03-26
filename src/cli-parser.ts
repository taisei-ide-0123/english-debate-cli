import readline from "readline";
import { getDottedLine, makeDottedLine } from "./utils/lines";
import {
  opinionInputRequestBase,
  topicInputRequestBase,
} from "./utils/constants";

const getInput = async (readline: readline.Interface, message: string) => {
  const inputs: Array<string> = [];

  await new Promise<void>((resolve) => {
    readline.question(message, (input: string) => {
      inputs.push(input);
      resolve();
    });
  });

  if (inputs.length === 0) {
    throw Error("Failed to get the input");
  }

  return inputs[0];
};

export const getInputs = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  makeDottedLine();

  console.log("I'm happy to engage in a debate with you.");
  makeDottedLine();

  const topicInputRequest = `${topicInputRequestBase}\n${getDottedLine()}\n`;
  const topic = await getInput(rl, topicInputRequest);
  makeDottedLine();

  const opinionInputRequest = `${opinionInputRequestBase}${topic}\n${getDottedLine()}\n`;
  const opinion = await getInput(rl, opinionInputRequest);
  makeDottedLine();

  rl.close();

  return [topic, opinion];
};
