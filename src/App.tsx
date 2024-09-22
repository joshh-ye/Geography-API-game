import React, { useState } from 'react';
import { fetchQuizQuestions, googleSearchAnswer, googleSearchAnswerUltimate } from './API'; // Import the new function
import QuestionCard from './components/QuestionCard';
import { QuestionsState } from './API';
import { GlobalStyle, StyledButton, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const fetchedQuestions = await fetchQuizQuestions();
    setQuestions(fetchedQuestions);

    resetGame();

    setLoading(false);
  };

  const resetGame = () => {
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestion(0);
  };

  const handleAnswerSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const selectedAnswer = e.currentTarget.value;
      const isCorrect = questions[currentQuestion].correct_answer === selectedAnswer;

      if (isCorrect) setScore((prevScore) => prevScore + 1);

      const answerRecord: AnswerObject = {
        question: questions[currentQuestion].question,
        answer: selectedAnswer,
        correct: isCorrect,
        correctAnswer: questions[currentQuestion].correct_answer,
      };
            
      setUserAnswers((prevAnswers) => [...prevAnswers, answerRecord]);
    }
  };

  const advanceToNextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;

    if (nextQuestionIndex === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setCurrentQuestion(nextQuestionIndex);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>GEO QUIZ (HARD)</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={currentQuestion + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            userAnswer={userAnswers[currentQuestion]}
            callback={handleAnswerSelection}
          />
        )}
        {!gameOver && !loading && userAnswers.length === currentQuestion + 1 && currentQuestion !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={advanceToNextQuestion}>
            Next Question
          </button>
        )}
    
        <StyledButton onClick={() => googleSearchAnswer(questions[currentQuestion].correct_answer)}>HINT</StyledButton>
        <StyledButton onClick={() =>  googleSearchAnswerUltimate('hint')}>'HINT'</StyledButton>
      </Wrapper>
    </>
  );
};

export default App;
