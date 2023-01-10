import { FC } from 'react';
import { Link } from 'react-router-dom';
import { startStyle } from '../styles/startStyle';

const Start: FC = () => {
  return (
    <Link className={startStyle.start} to={'/quiz'}>
      Start Quiz
    </Link>
  );
};

export default Start;
