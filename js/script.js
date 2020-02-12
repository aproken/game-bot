'use strict'

//Функция проверяет является числом или нет
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Функция проверяет угадал или нет
let createGame = function(){
  let correctNumber = Math.floor(Math.random() * 101)
  console.log(correctNumber)
  let getNumber = function() {
 
    //Функция проверяет, хочет играть или нет
    let getWish = function(flag) { 
      if (flag) {
        getNumber()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    }
  
    let wish,
        userNumber = prompt('Угадай число от 1 до 100')
    
    if (userNumber === null) {
      alert('Может, в следующий раз...')
    }
    else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
      wish = confirm('Введи число от 0 до 100!')
      getWish(wish)
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

let game = createGame()
game()