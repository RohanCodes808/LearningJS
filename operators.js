function age(a){
    switch(a){
        case 11:
            console.log("valid");
            break;
        case 12:
                console.log("valid");
                break;
        case 13:
                    console.log("valid");
                    break;
        case 14:
            console.log("valid");
            break;
        case 15:
            console.log("valid");
            break;   
            
            default:
                console.log("invalid");
                break;
    }
};
console.log(age(16));




//switch case statement

/* 
 syntax:

    switch (){
        case :
            console.log();
            break;
    }
*/

// for divisible by both 2 and 3 

function number(d){
    if(d%2 == 0 && d%3 ==0){
        console.log("divisible by both");
    }
    else{
        console.log("not divisible");
    }
}

console.log(number(15));

// for divisible by either 2 or 3 

function num(e){
    if(e%2 == 0 || e%3 ==0){
        console.log("divisible");
    }
    else{
        console.log("not divisible");
    }
}

console.log(num(7));


//ternary operator 


let samaye = 12;
let o = samaye>=18 ? "you can drive" : "You can't drive";
console.log(o);

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };

  console.log(greeting({name:'shyamm'}));
  console.log(greeting(null));
