'use strict'
// const a = 20
// const promise = new Promise ((resolve, reject) =>{
//   if (a > 10) {
//     // выводит результат
//     resolve(a)
//   } else {
//     // reject выводит сообщение об ошибки
//     reject('Some error')
//   }
// })
// console.log(promise);

// const a = 10
// const promise = new Promise ((resolve, reject) =>{
//   setTimeout(() => {
//     if (a > 10) {
//       // выводит результат
//       resolve(a)
//     } else {
//       // reject выводит сообщение об ошибки
//       reject('Some error')
//     }
//   }, 2000);
// })
// // promise принимает в себя кул бэк data
// // метод then открабатывает только тогда когда закончиться ассинхроная операция
// promise.then((data)=>{
//   console.log(data);
//   // напишем еще один кул - бэк который будт пинимать error
// }, (errorMessage)=>{
//   console.log(errorMessage);
// })



// const a = 20
// const promise = new Promise ((resolve, reject) =>{
//   setTimeout(() => {
//     if (a > 10) {
//       resolve(a)
//     } else {
//       reject('Some error')
//     }
//   }, 2000);
// })
// метод then открабатывает только тогда когда закончиться ассинхроная операция
// promise
//   .then((data)=>console.log(data))
//     // напишем еще один кул - бэк который будт пинимать error
//     // метод catch для обработки ошибки он для перехвата ошибок
//   .catch((errorMessage)=> console.log(errorMessage))
//   // метод finally выводится всегда не зависимо успешная операция прошла или нет
//   .finally(()=>console.log('finaly'))



//  в сам promise мы не можем ничего передть
// promise
//   // метод then мы можем вызвать сколько угожно
//   .then((data)=>data = data + 10)
//   .then((newData) =>{
//     console.log(newData);
//   })
//     // напишем еще один кул - бэк который будт пинимать error
//     // метод catch для обработки ошибки он для перехвата ошибок
//   .catch((errorMessage)=> console.log(errorMessage))
//   // метод finally выводится всегда не зависимо успешная операция прошла или нет
//   .finally(()=>console.log('finaly'))



//  в тамом виде мы уже можем передать занченя
// const promise = (num) =>{
//   return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//       if (num > 10) {
//         resolve(num)
//       } else {
//         reject('Some error')
//       }
//     }, 200);
//   })
// }
//  если promise вывзввать как фнукци я то можем передать в неё значение
// promise(15)
//   .then((data)=>{
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//       setTimeout(() =>{
//         resolve(data + 10)
//       },1000)
//     })
//   })
//   .then((data)=>console.log(data))
//   .catch((errorMessage)=> console.log(errorMessage))



// А ЧтО ЕСЛИ НУЖНО ПОЛУЧИТЬ НЕСКОЛЬКО РЕЗАЛЬТАОТВ PROMES

// const promise = (num) =>{
//   return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//       if (num > 10) {
//         resolve(num)
//       } else {
//         reject(num)
//       }
//     }, 200);
//   })
// }
// // сделаем 3 передменных и нам нужно седалть так чтобы пколчит резльтат кажлго promise
// const one = promise(15)
// const two = promise(5)
// const three = promise(35)
// // для этого есть Promise.all и обработка цепочкой then
// // если нам нуно 3 обработки с упешым завершение то
// // они передадут резульат resolve, а если юужелт ошибка то предт reject
// Promise.all([one, two,three]).then((data)=>{
//   console.log(data);
// })
// .catch(error => console.log(error))




// МЕТОД fetch
// метод fetch получает миниум 1 аргумент обзательным
// const user = fetch('db.json')
// console.log(user);

// user
//   // резльатт предадим response и раскроем его методом json
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data);
//   })

  // УПРОЩЕНИЕ ВЫАЖЕНИЙ
//  вторым аргументом мжет быть настройки они не обязательны
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// fetch('https://jsonplaceholder.typicode.com/posts',{
//   // method: 'POST' отправляет данные на сервер
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   // резльатт предадим response и раскроем его методом json
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data);
//   })
//   .catch(error=> console.log(error))


const form = document.getElementById('form')
const username = document.getElementById('username')
const pass = document.getElementById('password')

// const sendData = (url, data) =>{
//   return fetch(url,{
//     method: 'POST',
//     body: data,
//     headers: {
//       'Content-type': 'multipart/form-data',
//     },
//   }).then(response =>response.json())

// }
const sendData = ({url, data = {}, method = 'GET' }) =>{
  return fetch(url,{
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  }).then(response =>response.json())

}

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  // мы моежм не собирать объект user а просто создать класс конструктор
  // const user = {
  //   login: username.value,
  //   password: pass.value,
  // }

  const data = new FormData(form)

  sendData({
    url:'https://jsonplaceholder.typicode.com/posts',
    data: data,
    method: 'POST'
  })
    .then(data =>{
      console.log(data);
  })
})