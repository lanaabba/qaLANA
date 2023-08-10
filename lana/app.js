'use strict';

let userName = prompt("please enter your name ");
console.log(userName);
if (userName) {
    alert('hello ' + userName)
}
 

 let student = prompt( userName + `Please enter your mark !`);
 let marks=Math.floor(student );
console.log(marks)

if (marks >=0 && marks <= 49){
    alert ('your grade is : F ');
}
 else if (marks >=50  && marks <= 60){
    alert ('your grade is : D ');
    
}

else if (marks >=61 && marks <= 70){
    alert ('your grade is : C ');

}

else if (marks >=71 && marks <= 80){
    alert ('your grade is: B ');
}
else if (marks >=81  && marks <= 90){
    alert ('your grade is : A ') ;
}
else if (marks >=91  && marks <= 100){
    alert ('your grade is : A+ ');
    
}
else {
    alert ("Invalid Answer: Your Mark should be >= 0 and <= 100");
 }









