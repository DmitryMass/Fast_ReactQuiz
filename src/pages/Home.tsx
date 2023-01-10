import { FC, useState } from 'react';
import { questions } from '../data/questions';
import Quiz from '../components/Quiz/Quiz';
import Result from '../components/Result/Result';
import { homeStyle } from '../styles/homeStyle';

const Home: FC = () => {
  const [questionStep, setQuestionStep] = useState<number>(0);
  const question = questions[questionStep];
  const [result, setResult] = useState<number>(0);

  const handleClick = (idx: number) => {
    setQuestionStep((prev) => prev + 1);
    if (idx === question.correctAnswer) {
      setResult((prev) => prev + 1);
    }
  };

  return (
    <div className={homeStyle.box}>
      {questionStep !== questions.length ? (
        <Quiz question={question} handleClick={handleClick} />
      ) : (
        <Result result={result} />
      )}
    </div>
  );
};

export default Home;
