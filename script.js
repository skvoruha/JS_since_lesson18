'use strict'
const textBlock = document.querySelector('.text-block')
const addBtn = document.getElementById('add-btn')
const btnsBlock = document.querySelector('.buttons-block')

const main = document.querySelector('main')

let buttons = document.querySelectorAll('.btn')

const changeText = (text) =>{
  textBlock.textContent = text
}

const getNewButton = () =>{
  const newBtn = buttons[0].cloneNode()

  newBtn.textContent = buttons.length + 1 >= 10 ?
    buttons.length + 1 : `0${buttons.length + 1}`

  btnsBlock.append(newBtn)
  buttons = document.querySelectorAll('.btn')
}

// buttons.forEach(btn => {
//   btn.addEventListener('click', () =>{
//     changeText(btn.textContent)
//   })
// })

// ДЕЛЕГИРОВАНИЕ
main.addEventListener('click', (event) =>{
  console.log(event.target);
  // if (!event.target.classList.contains('btn')) {
  //   return
  // }
  if (event.target.matches('button.btn')) {
    changeText(event.target.textContent)
  } else if(event.target.id === 'add-btn'){
    getNewButton()
  }

})

// addBtn.addEventListener('click', () =>{
//   getNewButton()
// })