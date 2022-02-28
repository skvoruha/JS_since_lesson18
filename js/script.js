// // BOM - browser
// // содержит информацию о экране window.screen
// console.dir(window.screen);
// // screen можно обрщаться на прямую
// // clientHight
// // указывет длин и ширину экрана

// window.addEventListener('resize', () =>{
//   const height = document.documentElement.clientHeight
//   const width = document.documentElement.clientWidth

//   console.log('clientHeight', height);
//   console.log('clientWidth', width);
// })


  // const height = document.documentElement.clientHeight
  // const width = document.documentElement.clientWidth
  // const btn = document.getElementById('btn')

  // console.log('clientHeight', height);
  // console.log('clientWidth', width);

  // window.addEventListener('scroll', ()=>{
    //   const top = document.documentElement.scrollTop
    //   const left = document.documentElement.scrollLeft

    //   console.log('top ', top);
  //   console.log('left ', left);
  // })
  // // при нажати,кнопки скрол top на 100зч уйдет
  // btn.addEventListener('click', () =>{
    //   document.documentElement.scrollTop = 100
    // })

const block = document.querySelector('.block')
const btn = document.getElementById('btn')
// окажет размер блока без скрола (полосы прокуртуики)
const clientHeight = block.clientHeight
const clientWidth = block.clientWidth
// покажет размер блока заданного в css
const offsetHeight = block.offsetHeight
const offsetWidth  = block.offsetWidth
// для того чтобы получить полную ширину контента блока
const scrollHeight = block.scrollHeight
const scrollWidth  = block.scrollWidth

// console.dir(clientHeight);
// console.dir(clientWidth);
// console.dir(offsetHeight);
// console.dir(offsetWidth);
// console.dir(scrollHeight);
// console.dir(scrollWidth);

btn.addEventListener('click', () => {
  // console.log('fg');

  // 17 + 2 чтобв убртаь линию скрола
  // block.style.height = `${block.scrollHeight + 17 + 2}px`
  // block.style.width = `${block.scrollWidth + 17 + 2}px`
  // block.scrollTop += 10
  // block.scrollLeft = 100
  // console.log(block.scrollTop);
  // console.log(block.scrollLeft);
  // ПОШАГОВЫЙ МЕТОД РОКУРТКИ СКРОЛА
  // block.scrollBy(10,0)
  // ДАННЫЙ МЕТОД РЕАЛИЗУЕТ ТОЛЬКО ОДИН ПЕРЕХОД ТО ЕСТЬ ПЕРЙДЕТ ЕДИНОЖДЫ
  // block.scrollTo(20,100)


  // ПОЛУЧАЕМ КООРДИНАТФ
  // через точку можно обратиься к свойству
  const elemRect = block.getBoundingClientRect()
  console.log(elemRect.top);
})