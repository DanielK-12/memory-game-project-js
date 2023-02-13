/* Homework LOOPS - Check the results of your assignGrade function from the conditionals exercise
by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B.
 For 90, you got an A.
 For 91, you got an A.",
 etc., logging each grade point in the range */

function assignGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  }
  else if (score >= 80 && score <= 89) {
    return "B";
  }
  else if (score >= 70 && score <= 79) {
    return "C";
  }
  else if (score >= 60 && score <= 69) {
    return "D";
  }
  else {
    console.log("Requirments not met, please try again.")
  }
}

let inputScore = prompt("Please input your score here");
let grade = assignGrade(inputScore);
console.log(grade);

for (let i = 60; i <= 100; i++) {
  console.log('Your score is: ' + i + ', and you got: ' + assignGrade(i) + ' for it');
}