



/* variables */

let dipslay = document.querySelector('.display');
let copyBtn = document.querySelector('.copy');
let slider = document.querySelector('#slider');
let sliderValue = document.querySelector('.slider-value');
let capitalLetter = document.querySelector('#capital-letter');
let smallLetter = document.querySelector('#small-letter');
let number = document.querySelector('#numbers');
let specialKeys = document.querySelector('#special-keys');
let generate = document.querySelector('.generate');

/* arrays that sore password variation */

let smallLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']


let capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','I','M','N','O','P','Q','R','S','T','U','V','W','X','Z']

let numbers = [0,1,2,3,4,5,6,7,8,9]

let specialchar = ['@','#','$','%','&','!','_','-','/','?']

let password = []


/* displays slider value */

slider.addEventListener('input', () => {
   sliderValue.innerHTML = slider.value;
})





/* function to check what was checked and get random letters and symbols */


function getRandomValue() {

   if(smallLetter.checked == true) {
      for(let i = 0; i < slider.value; i++) {
         let random = Math.floor(Math.random() * smallLetters.length) 
         password.push(smallLetters[random])
      }
   }

   
   if(capitalLetter.checked == true) {
      for(let i = 0; i < slider.value; i++) {
         let random = Math.floor(Math.random() * capitalLetters.length) 
         password.push(capitalLetters[random])
      }
   }


   
   if(number.checked == true) {
      for(let i = 0; i < slider.value; i++) {
         let random = Math.floor(Math.random() * numbers.length) 
         password.push(numbers[random])
      }
   }

   
   if(specialKeys.checked == true) {
      for(let i = 0; i < slider.value; i++) {
         let random = Math.floor(Math.random() * specialchar.length) 
         password.push(specialchar[random])
      }
   }
   
   
}





/* colect random element from password array and display them */
function fetchPassword() {
   getRandomValue();

   for(let i = 0; i < slider.value; i++) {
      let random = Math.floor(Math.random() * password.length) 
      dipslay.innerHTML += (password[random]);
      console.log(password[random]);
   }
}



/* event listener for the button */


generate.addEventListener('click', fetchPassword)

