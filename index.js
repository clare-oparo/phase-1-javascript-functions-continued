// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}


const wrapAdjective = function(star="*") {
    return function(adjective="special") {
      return `You are ${star}${adjective}${star}!`
    }
  }
