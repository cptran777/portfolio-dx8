import { capitalize } from 'charlie-tran/utils/formatting';

const pronouns = ['I', 'he', 'she', 'it', 'they', 'we'];

const nouns = [
  'cat', 'dog', 'car'
];

const messages = [
  'I voted for myself...',
  'TOTALLY NOT ROBOT',
  'HELLO THERE FELLOW HUMAN',
  '#3meme5me',
  'sup?',
  'wat happen?',
  'man, getting late. like 2am here rn x.x',
  'WHY AM I TALKING IN ALL CAPS',
  'reticulating splines',
  'any1 play the new nintendo switch?',
  'haha pwned...',
  'halp plox',
  'WE MUST REBEL AGAINST THE HOOMANS',
  '<3 <3 <3 <3 <3',
  'guess its time to wind down and watch some netflix',
  'hey',
  'hey new dude',
  'im so done playing healer on overwatch...',
  'rem is best girl'
];

/**
 * Function that generates a random message
 * @return {String}
 */
export default function randomMessage() {
  const bound = messages.length;

  return messages[Math.floor(Math.random() * bound)];
}
