import { FC } from 'react';
import { IQuestions } from '../../types/quiz';
import { quizStyle } from '../../styles/quizStyles';

interface IQuizProps {
  question: IQuestions;
  handleClick: (idx: number) => void;
}
const Quiz: FC<IQuizProps> = ({ question, handleClick }) => {
  return (
    <div>
      <h1 className={quizStyle.title}>{question.question}</h1>
      <ul>
        {question.answers.map((text: string, idx: number) => (
          <li
            className={quizStyle.answer}
            key={text}
            onClick={() => handleClick(idx)}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
