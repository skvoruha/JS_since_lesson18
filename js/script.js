//  РЕГЛЯРНЫЕ ВЫРАЖЕНИЯ
// констуркторы
// const regexp1 = new RegExp('Привет')
// флаu g - то есть глбального будет проходить поиск п овсем псовпаениям
// const regexp1 = new RegExp('привет','g')
// const regexp2 = /привет/g
// const str = 'привет тебе , привет ему и вам привет!'
// // метод test пройдется по строке и найтдет выражение
// // и найдя первое совпдение он выведет true
// // console.log(regexp1.test(str));
// //  похож а метод test - даст рузультат объёет и выдаст индексы первого совпадения
// // сохраняет
// console.log(regexp1.exec(str));
// console.log(regexp1.exec(str));
// console.log(regexp1.exec(str));
// console.log(regexp1.exec(str));
// console.log(regexp1.exec(str));
// //объект regexp1 запоминает работу кажого метода exec или test
// console.dir(regexp1);

// console.log(str[0]);


// console.dir(regexp1);
// console.dir(regexp2);


// const regexp1 = new RegExp('привет','g')
// const regexp2 = /привет/g
// const str = 'привет тебе , привет ему и вам привет!'
// let reg
// const arr = []

// reg = regexp1.exec(str)
// while(reg){
//   arr.push(reg[0])
//   reg = regexp1.exec(str)
// }
// console.log(arr);
// флаг I будет игнорироавть регистр какого либо совпадения (, то есть
// с большоц или мальенкой буквы)
// "B ДВА" regexp1 и regexp2 ни чем не отлчюатся
// const regexp1 = new RegExp('привет','gi')
// const regexp2 = /привет/gi
// const str = 'Привет тебе , привет ему и вам привет!'
// // можно в местео переменной поставить /привет/gi вместо regexp2
// console.log(regexp2.test(str));
// console.log(regexp2.test(str));
// console.log(regexp2.test(str));
// console.log(regexp2.test(str));
// console.log(regexp2.test(str));

// console.dir(regexp2);

// .проверяем есть ли @
// const str = 'vlodimer@yahoo.ru'

// console.dir(/@/gi.test(str));


// const str = 'Привет тебе , привет ему и вам привет!'

// console.log(str.search(/привет/gi));
// console.log(str.match(/привет/gi));
// // заменит все слова привет на  hello  replace
// console.log(str.replace(/привет/gi,"hello"));



// СИМВОЛЬНЫЕ КЛАССЫ
// \d - любая цифра
// \w - любаяя латинская буква, цифра... (криица нет)
// \s - любая пробел
// ОТРИЦИАНИЕ СИМВОьНЫХ КЛАССОВ
// \D - любой символ кроме \d
// \W - любой символ кроме латинских символо цифр \w
// \S - любой символ кроме \s
//  . - точка, любой символ уроме \n - переноса строки

// const phone = ' 8 (715) 444 - 55 - 66c'
// // получим нормльный номр без пробелов и символов
// console.log(phone.match(/\d/g).join(''));
// console.log(phone.match(/\w/g).join(''));

// const phone = ' 8 (715) 444 - 55 - 66c'
// получим нормльный номр без пробелов и символов
//  всё что не являлось цифрой було заменно звёздочкой
// console.log(phone.replace(/\D/g,"*"));
// console.log(phone.replace(/\W/g,"*"));
// console.log(phone.replace(/\S/g,"*"));
// console.log(phone.replace(/./g,"*"));
// console.log(phone.match(/\./g));
// console.log(phone.match(/\s/g));

// ЯКОРЯ

// ^ - начало строки
// $ - конец строки
// \b  - граница слова

// const date = '22 october 1987'
// // желаемое совпадения с двумя подряд цифрами
// console.log(date.match(/^\d\d/g));
// // ищет два числа в конце выражения
// console.log(date.match(/\d\d$/g));
// // мы ищём 2 числа которые обрывают наше слово
// console.log(date.match(/\b\d\d/g));


//  НАБОР и ДИАПОЗОНЫ

// const string = 'дедушка и девушка де6ушка де^ушка'
// //  найти слова с почти одинаковыми символами
// // сделае квадратную скобку и вернём слова
// // console.log(string.match(/де[дв]ушка/g));набор символов
// //  Диапозон символов разрешили
// console.log(string.match(/де[а-я]ушка/gi));
// // передаим диапозон
// console.log(string.match(/де[a-zA-Z0-9]ушка/gi));
// // ищём любой символ не подходящий в диапозон ^
// console.log(string.match(/де[^a-zA-Z0-9]ушка/gi));
// //  ЭКРАНИРОВАНИЕ СИМВОЛО то есть символ отрицания
// console.log(string.match(/де[\^]ушка/gi));

// const string = 'дедушка и девушка де6ушка де^ушка'
// // обычно скобки убирает строка поэтому lkx релуярных варажений
// // нужно двойное экранирование
// const reg = new RegExp("де[\\^]ушка", "gi")
// console.log(string.match(reg));

//  КВАНТИФИКАТОРЫ
// const string = 'дедушка и девушка де6ушка де^ушко депдушка'
// // обычно скобки убирает строка поэтому lkx релуярных варажений
// // нужно двойное экранирование

// console.log(string.match(/[а-я]+[дв][а-я]+/gi));
// console.log(string.match(/[а-я]*[дв][а-я]*/gi));

// //  {1,} - от 1 до бесконечнокси вместо этого можно, +
// //  {0,} - от 0 до бесконечнокси вместо этого можно, *
// //  {0,1} - от 0  -1 можно ?


// СКОБОЧНЕ ГРУППЫ
// const string = 'google.com site.google.com '

// console.log(string.match(/[a-z]+\.[a-z]+/gi));
// // Более короткая запись
// console.log(string.match(/[\w]+\.[[\w]+/gi));
// //  получаем поное доменное имя
// // где есть нескоолько точек в строке и сиволов
// console.log(string.match(/([\w]+\.)+[[\w]+/gi));

// const string = 'test-test.test@google.com'
// // получим полнсть email даже если там есть тиреи точка
// const testEmail = /[\-\.\w]+@([\w]+\.)+[[\w]+/gi
// // тестирвание на валидность email
// console.log(testEmail.test(string));

// // разьитие реглуряных выражений на участки

const string = 'Это мой test-test.test@google.com'
// получим полнсть email даже если там есть тиреи точка
const testEmail = /(([\-\.\w]+)(@)([\w]+\.)+([\w]+))/gi
// тестирвание на валидность email
const result = string.replace(testEmail, (str, $1, $2, $3,$4,$5)=>{
  // выражение взятое в скоюки как массив по индексом
  // console.log($1);
  // console.log($2);
  // console.log($3);
  // console.log($4);
  // console.log($5);
  return "email " + `${$2}${$3}${$4}${$5}`
})

console.log(result);
// разьитие реглуряных выражений на участки