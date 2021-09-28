//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++){
         console.log(i)
    }
}

function multiplesOfThree(){
    for (let i = 0; i <= 100; i+=3){
        console.log(i)
    }
}

function multiplesOfThreeOrFive(){
    for (let i = 1; i <= 100; i+=1){
        if(i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
}

function untilNum(number){
    for (let i = 0; i <= number; i+=1){
        console.log(i)
    }
}

function multiply(x,y){
    let product = x*y 
    return product 
}


function add(x,y){
    let sum = x+y;
   
   
   if (x === y){
        return sum * 3
    }else{
         return sum;
    }
}
   function isNegative(number){
     if (number > 0) {
         console.log('Positive')
     } else {
         console.log('Negative')
     }
   }
   
  function triangleArea(x,y){
      let area = x * y / 2
      return area
    } 
 
  function betweenTwentyAndFourty(number){
      if(number >= 20 && number <= 100){
          return true;
      }else{
          return false;
      }
  }
  
  function largest(x, y, z){
      return 
  }