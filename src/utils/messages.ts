type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const requestOpinionReview = (topic: string, opinion: string): Message => {
  return {
    role: "user",
    content: `I will be debating ${topic} and sharing my opinion. Can you review it as a debate coach/English tutor? Here is my opinion. \n ${opinion}`,
  };
};

const grammarReviewRequest: Message = {
  role: "assistant",
  content:
    "Can you review the grammar of my opinion and point out any mistakes?",
};

const requestExamples = (topic: string): Message => {
  return {
    role: "assistant",
    content: `Can you provide me with examples of arguments from both perspectives, supporting and opposing ${topic}?`,
  };
};

export { Message, requestOpinionReview, grammarReviewRequest, requestExamples };
