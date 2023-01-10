import { IQuestions } from '../types/quiz';

export const questions: IQuestions[] = [
  {
    question: 'What is React?',
    answers: [
      'a) Server-side Framework',
      'b) User-interface framework',
      'c) A Library for building interaction interfaces',
    ],
    correctAnswer: 2,
  },
  {
    question: 'ReactJS uses _____ to increase performance',
    answers: ['a) Virtual DOM', 'b) Original DOM', 'c) Both 1 & 2'],
    correctAnswer: 0,
  },
  {
    question:
      'Keys are given to a list of elements in react. These keys should be -',
    answers: [
      'a) Unique in the DOM',
      'b) Do not requires to be unique',
      'c) Unique among the siblings only',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Who Develop React.js?',
    answers: ['a) Google', 'b) Facebook', 'c) Apple', 'd) Twitter'],
    correctAnswer: 1,
  },
  {
    question:
      'How do you write an inline style specifying the font-size:12px and color:red; in JSX',
    answers: [
      `a) style={{font-size:12,color:'red'}}`,
      `b) style={{fontSize:'12px',color:'red'}}`,
      `c) style={fontSize:'12px',color:'red'}`,
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is state in react? ',
    answers: [
      `a) Internal storage of the component`,
      `b) A prement storage`,
      `c) None of the above`,
    ],
    correctAnswer: 0,
  },
  {
    question:
      'To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?',
    answers: [
      `a) const first = ["cooking", "art", "history"] `,
      `b) const [] = ["cooking", "art", "history"]`,
      `c) const [first] = ["cooking", "art", "history"]`,
    ],
    correctAnswer: 2,
  },
  {
    question:
      'How do you handle passing through the component tree without having to pass props down manually at every level?',
    answers: [
      `a) React Send`,
      `b) React Pinpoint`,
      `c) React Router`,
      `d) React Context`,
    ],
    correctAnswer: 3,
  },
  {
    question: `const [, , animal] = ['Horse', 'Mouse', 'Cat'];
      console.log(animal)). What should the console read when the following code is run? `,

    answers: [`a) Horse`, `b) Cat`, `c) Mouse`, `d) None of the above`],
    correctAnswer: 1,
  },
  {
    question: `When do you use useLayoutEffect?`,
    answers: [
      `a) to optimize for all devices`,
      `b) to complete the update`,
      `c) to change the layout of the screen`,
      `d) when you need the browser to paint before the effect runs`,
    ],
    correctAnswer: 3,
  },
];
