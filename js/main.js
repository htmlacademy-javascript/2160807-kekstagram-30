const idCard = createRandomId(1, 25);

function createInfoCard () {

  return {
    id: idCard(),
    url: `photos/${idCard()}.jpg`,
    description: 'Описание фотографии',
    likes: createRandomNumber(15, 200),
    comments: createCommentsArray(createRandomNumber(0, 30))
  };
}

function createRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomId (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = createRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = createRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names = ['Артём', 'Влад', 'Ирина', 'Павел', 'Михаил', 'Дарья', 'Дмитрий', 'Алексей', 'Света', 'Oliver'];

//делает 2 неповторяющихся сообщения
let twoMessages = '';
const firstM = messages[createRandomNumber(0, messages.length - 1)];
const twoM = messages[createRandomNumber(0, messages.length - 1)];
if (firstM !== twoM) {
  twoMessages = `${firstM}  ${twoM}`;
}

// заполняет комменты
const idComment = createRandomId(1, 10000);

function createComment () {

  return {
    id: idComment(),
    avatar: `img/avatar-${createRandomNumber(0, 5)}.svg`,
    message: messages[createRandomNumber(1,6)] || twoMessages,
    name: names[createRandomNumber(1, names.length - 1)]
  };
}

function createCommentsArray () {

  return Array.from({length: createRandomNumber(0, 30)}, createComment);
}

const massiveCards = Array.from({length:25}, createInfoCard);

console.log(massiveCards);
