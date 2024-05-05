


const a =[1,2,3];
const b =["a",1,"b",2,"c",3];
const c = "abc123";
let d = getCurrentDate();

//A
function addNumbers(array){
    let sum = 0;
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}

//B
function findMaxNumber(array){
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxNum < array[i]){
            maxNum = array[i]
        }
        return  maxNum;
    }
}

//C
function AddOnlyNumbers(array){
    let newArray=[];
    for(let i=0;i<array.length;i++){
        if(!isNaN(parseFloat(array[i])) && isFinite(array[i])){
           newArray.push(parseFloat(array[i]))  ;  
        }
    }
    
    return addNumbers(newArray);
}

//C 
function getDigits(str){
    let newArray=[];
    for(i=0;i<str.length;i++){
        if(isNaN(parseInt(str[i]))==false)
          newArray.push(parseInt(str[i]));
    }
    return newArray;

}

//E
function reverseString(str){
    let newStr="";
    length=str.length;
    for(i=str.length-1;i>=0;i--){
        newStr+=str[i]
    }
    return newStr;
}

//F
function getCurrentDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

document.getElementById("A").innerHTML += " " + addNumbers(a);
document.getElementById("B").innerHTML += " " + findMaxNumber(a);
document.getElementById("C").innerHTML += " " + AddOnlyNumbers(b);
document.getElementById("D").innerHTML += " " + getDigits(b).join(", ");
document.getElementById("E").innerHTML += " " + reverseString(c);
document.getElementById("F").innerHTML += " " +  getCurrentDate();