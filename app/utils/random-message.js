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
  'rem is best girl',
  'i wanna enjoy fire emblem heroes, but there are so many hackers',
  '<message deleted due to inappropriate material>',
  'I started playing pokemon go again. It actally is a whole lot better than before',
  'OMG LOGAN WAS SO AWESOME',
  'I watched Logan the other day. Wow',
  'Anyone hanging around the SF bay area?',
  'bye',
  'Some companies have a staging environment. Others have a production environment. ' +
  'Some are lucky enough to have those be different things.',
  'what did i wrong?',
  'i just want go over heaven',
  'im thinking about resubbing for ffxiv. such a good game...',
  'i just want skyrim on the switch.',
  'i just want skyrim online. wait, that already exists XD',
  'XD',
  ':)',
  ':D',
  '^^',
  '^^;',
  ':o',
  '<3',
  '>.>',
  'I actually really enjoy watching Flash on CW.',
  'Anyone think Thanos in avengers looks like a wrinkled purple grimace?',
  'If I keep eating Mcdonald\'s like this I\'m gonna gain so much weight...',
  'I heard tahoe is supposed to be pretty nice this weekend',
  'Totally gonna start up fire emblem awakening again',
  '**** ******** ****** >.>',
  'is the profanity filter on or something? lol',
  'lol',
  'lolz',
  'lulz',
  'Trolls are everywhere man...',
  'TREASURE!!!',
  'Breath of the wild so fun to play!',
  '#hanzo main, fite me bro',
  'why is roadhog still so OP?',
  'bahahahahahahahahaha get rekt',
  'gg guys',
  'WHAT ARE YOU DOIN IN MAH SWAMP?',
  'Today is the last day of my vegan challenge',
  'CA$H ME OUTSAH HOW BOU DAH?',
  'Just picked up wow. goodbye real life',
  'I am awake',
  'its a sequel',
  'always be yourself. except when you can be batman. always be batman',
  'Its the nail that sticks out that gets hammered down'
];

/**
 * Function that generates a random message
 * @return {String}
 */
export default function randomMessage() {
  const bound = messages.length;

  return messages[Math.floor(Math.random() * bound)];
}
