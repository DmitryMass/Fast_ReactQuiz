import { FC, useEffect, useMemo, useState } from 'react';
import { questions } from '../../data/questions';
import { Link } from 'react-router-dom';

import ok from '../../assets/okey.svg';
import fail from '../../assets/fail.svg';
import { resultStyle } from '../../styles/resultStyle';
import { startStyle } from '../../styles/startStyle';

interface IResultProps {
  result: number;
}
const Result: FC<IResultProps> = ({ result }) => {
  const [endResult, setEndResult] = useState<boolean>(false);

  useEffect(() => {
    if (result >= questions.length - 1) {
      setEndResult(true);
    }
  }, []);

  return (
    <div className={resultStyle.resultBox}>
      <p className={endResult ? resultStyle.ok : resultStyle.fail}>
        {endResult ? 'Congrat' : 'Fail'}
      </p>
      <img className={resultStyle.img} src={endResult ? ok : fail} alt='' />
      <h2 className='text-white mb-2'>
        Your score : {result} from {questions.length}
      </h2>
      <Link className={`${startStyle.start}`} to={'/'}>
        Start Page
      </Link>
    </div>
  );
};

export default Result;
