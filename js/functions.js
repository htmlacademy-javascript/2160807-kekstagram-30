// функция для проверки длины строки
function lengthString (string, number) {
  return string.length <= number;
}

lengthString('aaassssa', 4);
lengthString('aaas', 4);

// Функция для проверки, является ли строка палиндромом.
function palindrome (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  const stringNormal = string;
  let stringNew = '';
  for (let i = stringNormal.length - 1; i > -1; i--) {
    stringNew += stringNormal[i];
  }
  return stringNew === stringNormal;
}
palindrome('довод');
palindrome('кекс');
palindrome('Лёша на полке клопа нашёл ');
