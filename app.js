

//Q.1. Declare an empty array using JS literal notation to store student names in future. 
let studentNames = new Array();
document.write(`Question 1. <br>`);
document.write(`${studentNames} <br/><br/><br/><br/><br/> `)






//Q.2 Declare an empty array using JS object notation to store student names in future. 
let studentNam = [];
document.write(`Question 2. <br>`);
document.write(`${studentNam} <br/><br/><br/><br/><br/> `)





//Q.3 Declare and initialize a strings array. 
let store = ["Pen", "Pencil", "Sharpner", "scale"]
document.write(`Question 3. <br>`);
document.write(`${store} <br/><br/><br/><br/><br/> `)




//Q.4 Declare and initialize a strings array. 
let nanz = [3, 6, 8, 0, 8]
document.write(`Question 4. <br>`);
document.write(`${nanz} <br/><br/><br/><br/><br/> `)





//Q.5 Declare and initialize a boolean array.
let booleanArr = [false, true, false, false, true]
document.write(`Question 5. <br>`);
document.write(`${booleanArr} <br/><br/><br/><br/><br/> `)





//Q.6 Declare and initialize a mixed array.
let mixedArr = [12, "Arma", false, 7687, "Sakina", true]
document.write(`Question 6. <br>`);
document.write(`${mixedArr} <br/><br/><br/><br/><br/> `)






//Q.7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
document.write(`Question 7. <br>`);
let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write(`Qualification: <br/> 1)${education[0]} <br/>`)
document.write(`2) ${education[1]} <br/> `)
document.write(`3) ${education[2]} <br/> `)
document.write(`4) ${education[3]} <br/> `)
document.write(`5) ${education[4]} <br/> `)
document.write(`6) ${education[5]} <br/><br/><br/><br/><br/> `)





//Q.8 Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  
document.write(`Question 8. <br>`);
let totalMarks = 500;
let stuNames = ["Michael", "John", "Tony"];
let stuNum = ["320", "230", "480"];
let stu1 = (320 / totalMarks) * 100;
let stu2 = (230 / totalMarks) * 100;
let stu3 = (480 / totalMarks) * 100;

document.write(`Score of ${stuNames[0]} is ${stuNum[0]}. Percentage: ${stu1}% <br/>`)
document.write(`Score of ${stuNames[1]} is ${stuNum[1]}. Percentage: ${stu2}% <br/>`)
document.write(`Score of ${stuNames[2]} is ${stuNum[2]}. Percentage: ${stu3}% <br/><br/><br/><br/><br/><br/>`)





//Q.9  Initialize an array with color names. Display the array elements in your browser. 
document.write(`Question 9. <br>`);
let colorName = ["red", "blue", "green", "white", "black", "yellow"];
document.write(` ${colorName} <br>`)
//a) Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
let userclr = prompt(`what color do you want to add in the begining?`)
colorName.unshift(`${userclr}`);
document.write(`a) ${colorName} <br>`)
//b) Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
let userclr1 = prompt(`what color do you want to add in the end?`)
colorName.push(`${userclr1}`);
document.write(`b) ${colorName} <br>`)
//c) Add two more color to the beginning of the array. Display the updated array in your browser. 
colorName.unshift("brown", "orange");
document.write(`c) ${colorName} <br>`)
//d) Delete the first color in the array. Display the updated array in your browser. 
colorName.shift();
document.write(`d) ${colorName} <br>`)
//e) Delete the last color in the array. Display the updated array in your browser.
colorName.pop();
document.write(`e) ${colorName} <br>`)
//f) Ask the user at which index he/she wants to add a color,& color name. Then add the color to desired position/index. . Display the updated array in your browser
var userindex = prompt("At which index you want to add color?");
var userColor = prompt("Enter a color to add the color to desired index!");
colorName.splice(userindex, 0, userColor);
document.write(`f) ${colorName} </br>`);
//g)  Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var userindex1 = prompt("At which index you want to delete color?");
var userColor2 = prompt("how many colors you want to delete!");
colorName.splice(userindex1, userColor2);
document.write(`g) ${colorName} </br><br><br><br><br><br>`);





// Q.10  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
document.write(`Question 10. <br>`);
let score = ["320", "230", "480", "120"]
document.write(`orignal Array: ${score}</br>`)
score.sort()
document.write(`Sorted Array: ${score}</br><br><br><br><br><br>`)





//Q.11  Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array. 
document.write(`Question 11. <br>`);
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let newCities = cities.splice(2, 2);
document.write(`${newCities}<br/><br/><br/><br/><br/>`)





//Q.12  Write a program to create a single string from the elow mentioned array:
document.write(`Question 12. <br>`);
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
document.write(`${arr} <br/> `);
document.write(`${str} <br/><br/><br/><br/><br/><br/>`);





//  Q 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
document.write(`Question 13. <br>`);
let Device = ["Keyboard", "Mouse", "Printer", "Monitor"]
for (let i = 0; i < Device.length; i++) {
  document.write(`Out: <br/> ${Device[i]} <br/>`)
}





//Q 14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)

document.write(`<br/><br/><br/><br/><br/><br/>`)
document.write(`Question 14. <br>`);
let device = ["Keyboard", "Mouse", "Printer", "Monitor"]
for (let i = device.length - 1; i >= 0; i--) {
  document.write(`Out: <br/> ${device[i]} <br/>`)
}
document.write(`<br/><br/><br/><br/><br/><br/>`)





//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method: 

let manufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`Question 15. <br>`);
document.write(
  `<select>
<Option> ${manufacturer[0]}</Option>
<Option> ${manufacturer[1]}</Option>
<Option> ${manufacturer[2]}</Option>
<Option> ${manufacturer[3]}</Option>
<Option> ${manufacturer[4]}</Option>
<Option> ${manufacturer[5]}</Option>
  </select>`
)