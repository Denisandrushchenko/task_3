'use strict'
/*
let num1 = +prompt('enter first number')
let num2 = +prompt('enter second number')

function numComparison(a,b){
    if(a<b){
        return -1
    }
    if(a>b){
        return 1
    }
    if (a==b){
        return 0 
    }
}

console.log(numComparison(num1 , num2))



let num = + prompt('Enter number')

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(num) ); 




 let num1 = +prompt('enter first number')
 let num2 = +prompt('enter second number')
 let num3 = +prompt('enter third number')

 function concat1(a, b , c){
     let rez = String(a) + String(b) + String(c)
     return +rez
 }

 console.log(concat1(num1 , num2 , num3))

 


  let num1 = +prompt('enter first number')
  let num2 = +prompt('enter second number')

  if (num2 == 0){
      num2 = num1
  }
  


  function sqr(a , b){
      return a * b
  }

  console.log(sqr(num1, num2))

  
   let number = +prompt('Введите число')
   function perfectNum(num){
       let sum = 0;
       let del ;
       for( let i = 0 ; i < num ; i++){
           del = num%i;
           if (del === 0){
               sum += i;
           }
        }
        if (num === sum){
            console.log(num + ' совершенное число')
        }
        else {
            console.log('это не совершенное число')
        }

       }
   
       perfectNum(number)

       function perfectNum(num){
           let sum = 0;
           let del ;
           for( let i = 0 ; i < num ; i++){
               del = num%i;
               if (del === 0){
                   sum += i;
               }
            }
            if (num === sum){
                return true
            }
         }

        let num1 = +prompt('enter frist number for diapazone')
        let num2 = +prompt('enter second number for diapazone')

       
        function perfectNum2(a , b ){
            do {
                if (perfectNum(a)) {
                alert(a + ' is perfect number') 
                }
                a++
            } while (a < b)

        }
        
        perfectNum2(num1 , num2)

         


        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        function time(hrs, min=0, sec=0){

        if (sec < 10 ){
            sec = '0'  + sec
        }

        
        if (min < 10 ){
            min = '0'  + min
        }
    
        document.write(`<h1> ${hrs}  ${min} ${sec} <h1> `)
    }

    time(hour, minute)

    
     let date = new Date();
     let hour = date.getHours();
     let minute = date.getMinutes();
     let second = date.getSeconds();
     




     function secondsTrasform(a , b , c){
         return a * 3600 + b * 60 + c
 
     }

      
   console.log(secondsTrasform(hour, minute , second))
 
   


   
       function transformSecond(sec){
        let rez
        let hours = Math.floor(sec / 3600  % 24)
        let minutes = Math.floor(sec / 60 % 60)
        let seconds = sec % 60

        if (seconds < 10 ){
            seconds = '0'  + seconds
        }
        if (minutes < 10 ){
            minutes = '0'  + minutes
        }


        return rez = `${hours}:${minutes}:${seconds} `
       }


      console.log(transformSecond(58000))
      

      */



     let a1 = 12
     let b1 = 35
     let c1 = 35

     let a2 = 17
     let b2 = 12
     let c2 = 43


     function secondsTrasform(a , b , c){
        return a * 3600 + b * 60 + c

    }


    function transformSecond(sec){
        let rezult
        let hours = Math.floor(sec / 3600  % 24)
        let minutes = Math.floor(sec / 60 % 60)
        let seconds = sec % 60

        if (seconds < 10 ){
            seconds = '0'  + seconds
        }
        if (minutes < 10 ){
            minutes = '0'  + minutes
        }


        return rezult = `${hours}:${minutes}:${seconds} `
       }


   let rez1 = secondsTrasform(a1, b1 , c1)

   let rez2 = secondsTrasform(a2 , b2 , c2)

   let rez3 = rez2 - rez1
   
   console.log(rez3)


   console.log(transformSecond(rez3))
    
 