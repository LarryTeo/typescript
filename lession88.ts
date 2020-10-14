let displayColors = function (message,...colors:string[]){
      for(let i in colors){
          console.log(colors[i]);
      }
    
}
let message ="hello";
let colors =["blue","green"];
displayColors(message,...colors);
//rest chuyền vào từng phần tử lấy ra mảng
//spread chuyền vào mảng lấy ra phần tử
var employees = ['A',"B","C"];
let [emp1, emp2, emp3] = employees;
console.log(emp1);
console.log(emp2);
console.log(emp3);
//tách mảng
let employee ={
    fname:"Noisy",
    lname:"yeudau",
    level:2
}
let {fname :f,lname :l,level:lv} = employee;
console.log(f);
console.log(l);
console.log(lv);
//bóc tác object --> định nghĩa lại tên biến abc :a 

var namem = "noisy";
let stt: number =10;
var outputmess = `
 wellcome ${namem} ${stt} to BHTA
 this is toturios
 `;
console.log(outputmess);

