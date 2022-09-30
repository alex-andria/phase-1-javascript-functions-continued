// Your code here

function saturdayFun(activity = "roller-skate"){
    let answer = `This Saturday, I want to ${activity}!`;
    return answer;
}

function mondayWork(activity = "go to the office"){
    let answer = `This Monday, I will ${activity}.`;
    return answer;
}

//Immediately-Invoked Function Expression (IIFE) Example
// (function (basenumber){
//     return baseNumber +3;
// }) (2); // => 5

function wrapAdjective(flare = "*", adj){

    const innerFunc = function (adj = "special"){

        let answer = `You are ${flare}${adj}${flare}!`;
        return answer;
    }
    return innerFunc;
}


