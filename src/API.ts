export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

const shuffleArray = (array: any[]) => 
  [...array].sort(() => Math.random() - 0.5);


export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple`;
  const response = await fetch(endpoint);
  const data = await response.json();
  
  return data.results.map((question: Question) => {
    const shuffledAnswers = shuffleArray([...question.incorrect_answers, question.correct_answer]);
    return {
      ...question,
      answers: shuffledAnswers,
    };
  });
};

export const googleSearchAnswer = (question: string) => {
  const googleSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(question)}`;
  
  window.open(googleSearchUrl, '_blank');
};

export const googleSearchAnswerUltimate = (question: string) => {
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(question)}`;
  
  
  window.open(googleSearchUrl, '_blank');
};