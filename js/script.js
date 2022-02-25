// console.log(window);

// setTimeout(() => {
//   console.log(' Привет, я setTimeout');
// },200)



// const logger = (str) => {
//   console.log(` Привет, я ${str} setTimeout`);
// }
// не надо добавлять круглые скобки
// если запустить функцию с передачей аргумента таким образом
//  то функция запуститться сразу а не через 2000
// setTimeout(logger(`setTimeout`),2000)




// // чобы работало 2000 нужна функция обёртка
// setTimeout(() =>{
//   console.log('setTimeout');
// },2000)



// let idTimeout = setTimeout(() =>{
//   console.log('setTimeout');
// },2000)
// // запрещаем вызов setTimeout для этого нужно передать индетификатор
// // а для этого нужно записать в переменную
// clearTimeout(idTimeout)


// Первый зов случиться через 2000 setInterval
//  можно вызвать и так и через переменную
// setInterval(() =>{
//   console.log('setInterval 3000');
// },3000)


// let idInterval =  setInterval(() =>{
//   console.log('setInterval 3000');
// },3000)

// clearTimeout(idInterval)

// let count = 0

// const logger = (str) => {
//   console.log(` Привет, я ${str} setTimeout`);
// }

// let idTimeout = setTimeout(() =>{
//   console.log('setTimeout');
// },2000)

// clearTimeout(idTimeout)

// let idInterval =  setInterval(() =>{
//   count++
//   console.log('setInterval 3000');
//   // если count больше 10 закрыть clearTimeout
//   if (count == 10) clearTimeout(idInterval)
// },300)




// let active = false
// let idTimeout

// // при любом нажатии он меняет active на false
// document.addEventListener('click', ()=>{
//   // включатель и выключатель функции logger
//   // if (active) {
//   //   active = false
//   // } else {
//   //   active = true
//   // }
//   // более простой включатель и выключатель
//   active = !active
//   // ключатель функции
//   logger('setTimeout');
//   console.log(active);
// })

// const logger = (str) => {
//   // мы проевремя если true то фунция заупускам
//   if (active) {
//     console.log(` Привет, я ${str} setTimeout`);
//     idTimeout = setTimeout(() =>{
//         logger('setTimeout');
//     },300)
//   }
// }




// clearTimeout(idTimeout)


// const airplane = document.querySelector('.airplane')
// const man = document.querySelector('.man')

// let count = 160
// let idInterval

// const flyAnimate = () => {
//   count++

//   console.log(count);

//   if(count < 320) {
//     man.style.top = count + 'px'
//     airplane.style.left = count*3 + 'px'
//     // полсе того как count дойдёт до 200

//   } else if (count<500){
//         airplane.style.left = count*3 + 'px'
//   } else {
//     clearInterval(idInterval)
//   }
// }


// idInterval = setInterval(flyAnimate,150)


// const airplane = document.querySelector('.airplane')
// const man = document.querySelector('.man')

// let count = 0
// let idInterval
// let active = false

// const flyAnimate = () => {
//   count++
//   // Анимация лучше делать ерез requestAnimationFrame
//   idInterval = requestAnimationFrame(flyAnimate)

//   if(count < 320) {
//     man.style.top = count + 'px'
//     airplane.style.left = count*5 + 'px'
//     // полсе того как count дойдёт до 200

//   } else if (count<500){
//         airplane.style.left = count*3 + 'px'
//   } else {
//     cancelAnimationFrame(flyAnimate)
//   }
// }
// // функция анимации


// document.addEventListener('click', () => {
//   if (active) {
//      cancelAnimationFrame(flyAnimate)
//      active = false
//     } else {
//       idInterval = requestAnimationFrame(flyAnimate)
//       active = true
//   }
// })



// Объект Date

// передавая в таком формате нужно запомнить порядок
// let date = new Date(1989, 9 ,22, 03 ,02,200)
// год 1900
// let date = new Date('', 9 ,22, 03 ,02,200)

// console.log(date);

// console.log('Год ' + date.getFullYear());
// console.log('Месяц ' + (date.getMonth() + 1));
// console.log('Число месяца ' + date.getDate());
// console.log('Число недели ' + date.getDay());

// console.log('Часы ' + date.getHours());
// console.log('Минуты ' + date.getMinutes());
// console.log('Секунды ' + date.getSeconds());
// console.log('Милисекунды ' + date.getMilliseconds());


// время по гринвичу

// let date = new Date(1423524542364)
let date = new Date()
// передаём свои данные по году
// date.setFullYear(1987,9,4)
// предаём число месяца
// date.setMonth(9,22)

// передать 1 аргумент это число
// date.setDate(223)
// можно передать сегодняшнее число плюс 100 дней
// date.setDate(date.setDate + 100)
// емли передать больше 30 дней то будет переводит на другой месяц
// ТАКЖЕ МОЖНО ПЕРЕДАТЬ ЧАСЫ , МИНУТЫ СЕКУНДЫ И МИЛИСЕКУНДЫ
// ДЕНЬ НЕДЕЛИ МЫ ПЕРЕДАТЬ НЕ МОЖЕМ
// ТАКЖЕ И С МЕСЯЦАМИ
// date.setMonth(17,175)

console.log('Год ' + date.getUTCFullYear());
console.log('Месяц ' + (date.getUTCMonth() + 1));
console.log('Число месяца ' + date.getUTCDate());
console.log('Число недели ' + date.getUTCDay());

console.log('Часы ' + date.getUTCHours());
console.log('Минуты ' + date.getUTCMinutes());
console.log('Секунды ' + date.getUTCSeconds());
console.log('Милисекунды ' + date.getUTCMilliseconds());


// times tamp это сктолько прошло милисекунд с 1970
// если предать дату до 1970 года то мы получим отрицательное число
console.log(date.getTime());

// локализация
// console.log(date.toLocaleDateString('en'));
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// ISO формат даты
console.log(date.toISOString('en').substr(0,10));


// получи млмсек
console.log(Date.now());

console.log(Date.parse('22 ocotber 1987'));