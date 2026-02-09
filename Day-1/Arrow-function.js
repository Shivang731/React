const { useState } = require("react")

  Phase 1: The "One-Liners"
  
  
  
   Q1-                       The multiplier

    
   // let multiply(a,b) => a*b;  //wrong

    let multiply = (a,b) => a*b;
                      
    
   Q2-                The Screamer                  
                      
                      
//wrong 
 //const shout = .getElementById(Input-value) => shout.toUpperCase;

 const shout = text => text.toUpperCase();
 

    Q3-                 The oddity

const isodd = (a) => a%2==0 ? "even" : "odd";


Phase 2: The "Array Transformers"

      Q4-                       Tax Man

const prices = [10,20,30];
const mapped = prices.map(x =>x* 1.1);  //if we want to find just the tax amount it would be multiplied by only 0.1 but cause we want the amout along with the tax amount 100 percent is = 1.0 then tax tax 10 % thats 0.1 so total  1.1 


console.log(mapped);
                
      Q5-                    The Bouncer

const ages = [12,18,25,15,40];

const filer = ages.filter((age) => age>=18);
console.log(filer);

      Q6-                  The Initializer

const names = ["John","Paul","George","Ringo"];
const map = names.map((x) => x[0]);
console.log(map);



