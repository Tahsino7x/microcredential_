
let count = 0;
let btn5 = document.querySelector('.button5');
let displaymsg2 = document.querySelector('.display2');
if(count == 0){
  displaymsg2.innerHTML += '<br> The cart has 0 2x2 items.'
  count +=1
}
btn5.addEventListener('click', function(){
  if(count == 1){
    displaymsg2.innerHTML = `The cart has ${count} 2x2 items.`;
    count +=1
  }
  else{
    displaymsg2.innerHTML = `<br>The cart has ${count} 2x2 items.`;
    count +=1
  }
});

let count1=0;
let btn6 = document.querySelector('.button6');
let displaymsg3 = document.querySelector('.display3');
if(count1 == 0){
  displaymsg3.innerHTML += '\n <br> The cart has 0 3x3 items.'
  count +=1
}
btn6.addEventListener('click', function(){
  if(count1 == 1){
    displaymsg3.innerHTML = `\n The cart has ${count} 3x3 cubes items.`;
    count1 +=1
  }
  else{
    displaymsg3.innerHTML = `\n <br>The cart has ${count} 3x3 items.`;
    count1 +=1
  }
});


let count2 =0;
let btn7 = document.querySelector('.button7');
let displaymsg4 = document.querySelector('.display4');
if(count2 == 0){
  displaymsg4.innerHTML += '\n <br> The cart has 0 4x4 items.'
  count +=1
}
btn7.addEventListener('click', function(){
  if(count2 == 1){
    displaymsg4.innerHTML = `\n The cart has ${count} 4x4 items.`;
    count +=1
  }
  else{
    displaymsg4.innerHTML = `\n <br>The cart has ${count} 4x4 items.`;
    count +=1
  }
});
