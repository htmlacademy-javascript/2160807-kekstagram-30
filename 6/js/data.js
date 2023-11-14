import { createRandomId } from './util';
import { createRandomNumber } from './util';
import { getRandomArrayElement } from './util';
import { createIdGenerator } from './util';

const idCard = createRandomId(1, 25);
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Артём', 'Влад', 'Ирина', 'Павел', 'Михаил', 'Дарья', 'Дмитрий', 'Алексей', 'Света', 'Oliver'];

function createInfoCard (index) {

  return {
    id: idCard(),
    url: `photos/${index}.jpg`,
    description: 'Описание фотографии',
    likes: createRandomNumber(15, 200),
    comments: createCommentsArray(createRandomNumber(0, 30))
  };
}

//делает 2 неповторяющихся сообщения
let twoMessages = '';
const firstM = MESSAGES[createRandomNumber(0, MESSAGES.length - 1)];
const twoM = MESSAGES[createRandomNumber(0, MESSAGES.length - 1)];
if (firstM !== twoM) {
  twoMessages = `${firstM}  ${twoM}`;
}

// заполняет комменты
const commentId = createIdGenerator();

function createComment () {

  return {
    id: commentId(),
    avatar: `img/avatar-${createRandomNumber(1, 6)}.svg`,
    message: MESSAGES[createRandomNumber(1,6)] || twoMessages,
    name: getRandomArrayElement(NAMES)
  };
}

function createCommentsArray () {

  return Array.from({length: createRandomNumber(0, 30)}, createComment);
}

const massiveCards = () => Array.from({length:25}, (_, pictureIndex) => createInfoCard(pictureIndex + 1));

export {massiveCards};
