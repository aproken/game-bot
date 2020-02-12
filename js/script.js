'use strict'

//Функция проверяет является числом или нет
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Функция проверяет угадал или нет
let createGame = function(correctNumber){
  let getNumber = function() {
 
    //Функция проверяет, хочет играть или нет
    let getWish = function(flag) { 
      if (flag) {
        getNumber()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    }
  
    let wish
    let userNumber = prompt('Угадай число от 1 до 100')
    console.log(userNumber)
    console.log(!isNumber(userNumber))
  
    if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
      wish = confirm('Введи число от 0 до 100!')
      getWish(wish)
    }
    else if (userNumber === null) {
      alert('Может, в следующий раз...')
    }
    else if (userNumber == correctNumber) {
      alert('Ты угадал!')
    } 
    else if (userNumber > correctNumber) {   
      wish = confirm('Загаданное число меньше. Попробуй еще')
      getWish(wish)
    } 
    else if (userNumber < correctNumber) {
      wish = confirm('Загаданное число больше. Попробуй еще')
      getWish(wish)
    }
  }
  return getNumber
}    

let game = createGame(55)
game()


// function createPrompt(defaultValue){
//   function myPrompt(text){
//     let result = prompt(text)
//     if (result){
//       return result
//     } else {
//       return defaultValue
//     }
//   }

//   return myPrompt
// }



// prompOr5 = createPrompt(5)
// promtOr10 = createPrompt(10)
// prompOrHello = createPrompt('Hello')

// prompOr5('adsadasd')