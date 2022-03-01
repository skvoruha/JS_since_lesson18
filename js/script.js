'use strict'
// const text = document.getElementById('text')

// // console.log(text);
// // // заменим текст Lorem на Лорем
// // text.textContent = text.textContent.replace(/Lorem/gi, "Лорем")
// // Длеаем так чтобы теги span были завёрнуты еще в тег strong
// text.innerHTML = text.innerHTML.replace(/(<span>[\w\s]+<\/span>)/gi,(str, $1) =>{
//  return `<strong>${$1}</strong>`
// })

// ФОРМЫ
const textInput = document.getElementById('text')
const numberInput = document.getElementById('number')
const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
  // запрещаем отправку формы
  e.preventDefault()
  // создаим переменную isError
  let isError = false
  // проверяем на наличие символов кирилицы
  //  знак отрицане Нет ли ни одного исмвола !  ^
  if (!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== '') {
    console.log(textInput.value);
  } else{
    isError = true
  }
  // проверка на цифры
  if (!/[^\d]/g.test(numberInput.value) && numberInput.value !== '') {
    console.log(numberInput.value);
  } else{
    isError = true
  }

  // если переменнаяя isError == false то отправим
  if (!isError) {

  }
})
// textInput.addEventListener('input', (e)=>{
//   // запрещаем вывод чисел в консоль только
//   // заперетили ввод символов
//   e.target.value = e.target.value.replace(/\d+/,"")

// })
// numberInput.addEventListener('input', (e)=>{
//   // числа вводятся а буквы нет
//   // запрещаем вывод букв
//   // заперетили ввод букв
//   e.target.value = e.target.value.replace(/\D+/,"")

// })