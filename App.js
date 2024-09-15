// Assignment 05
// Question # 01

// let studentNames = [];

// Question # 02
// let studentNames = new Array();

// Question #03
// let studentNames = ["ahmed", "Zia", "ali", "bazil"];

// Question #04
// let studentGrades = [85, 90, 78, 92];

// Question # 04
// let isAdmin = [true, false, true, false, true];

// Question # 05
//let mixedArray = [1, "hello", true, 3.14, null, undefined, {name: "Zia", age: 30}];

// Question # 06
// let educationQualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD"
// ];

// document.write("<h2>Education Qualifications in Pakistan:</h2>");
// document.write("<ul>");

// for (let i = 0; i < educationQualifications.length; i++) {
//   document.write("<li>" + educationQualifications[i] + "</li>");
// }

// document.write("</ul>");

// Questionj # 07
// Array to store student names
// let studentNames = ["Ali", "Ahmed", "Hassan"];

// // Array to store student scores
// let studentScores = [420, 380, 450];

// // Total marks for each student
// let totalMarks = 500;

// // Function to calculate percentage
// function calculatePercentage(score) {
//     return (score / totalMarks) * 100;
// }

// Display student scores and percentages
// document.write("<h2>Student Scores and Percentages:</h2>");
// document.write("<table>");
// document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");

// for (let i = 0; i < studentNames.length; i++) {
//   let score = studentScores[i];
//   let percentage = calculatePercentage(score);
//   document.write("<tr>");
//   document.write("<td>" + studentNames[i] + "</td>");
//   document.write("<td>" + score + "/" + totalMarks + "</td>");
//   document.write("<td>" + percentage.toFixed(2) + "%</td>");
//   document.write("</tr>");
// }


// Question # 08

// document.write("</table>");
// let colorArray = ["Red", "Green", "Blue", "Yellow"];

// document.write("<h2>Initial Color Array:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");

// let newColor = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(newColor);
// document.write("<h2>Updated Color Array after adding to the beginning:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");

// Question # 09


// newColor = prompt("Enter a color to add to the end:");
// colorArray.push(newColor);
// document.write("<h2>Updated Color Array after adding to the end:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");

// colorArray.unshift("Orange", "Purple");
// document.write("<h2>Updated Color Array after adding two colors to the beginning:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");


// colorArray.shift();
// document.write("<h2>Updated Color Array after deleting the first color:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");
// colorArray.pop();
// document.write("<h2>Updated Color Array after deleting the last color:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");
// let index = parseInt(prompt("Enter the index to add a color:"));
// newColor = prompt("Enter a color to add:");
// colorArray.splice(index, 0, newColor);
// document.write("<h2>Updated Color Array after adding a color at a specific index:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");
// index = parseInt(prompt("Enter the index to delete colors:"));
// let count = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(index, count);
// document.write("<h2>Updated Color Array after deleting colors at a specific index:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colorArray.length; i++) {
//   document.write("<li>" + colorArray[i] + "</li>");
// }
// document.write("</ul>");


// Question # 10
// let studentScores = [420, 380, 450, 320, 490];

// studentScores.sort((a, b) => a - b);

// document.write("<h2>Sorted Student Scores in Ascending Order:</h2>");
// document.write("<ul>");
// for (let i = 0; i < studentScores.length; i++) {
//   document.write("<li>" + studentScores[i] + "</li>");
// }
// document.write("</ul>");

// Question # 11
// Initialize an array with city names
// let cities = ["New Karachi", "karachi", "india", "chandigar", "lahore", "Islamabad", "thatta", "Liyari"];

// document.write("<h2>Initial Cities Array:</h2>");
// document.write("<ul>");
// for (let i = 0; i < cities.length; i++) {
//   document.write("<li>" + cities[i] + "</li>");
// }
// document.write("</ul>");

// let selectedCities = cities.slice(1, 4);

// document.write("<h2>Selected Cities Array:</h2>");
// document.write("<ul>");
// for (let i = 0; i < selectedCities.length; i++) {
//   document.write("<li>" + selectedCities[i] + "</li>");
// }
// document.write("</ul>");

// Question # 12
// var arr = ["This ", " is ", " my ", "cat"];

// var sentence = arr.join("");

// document.write("<h2>Single String:</h2>");
// document.write("<p>" + sentence + "</p>");

// Question # 13
// let fifoArray = [];

// fifoArray.push("Apple");
// fifoArray.push("Banana");
// fifoArray.push("Cherry");
// fifoArray.push("Date");
// fifoArray.push("Elderberry");

// document.write("<h2>FIFO Array:</h2>");
// document.write("<ul>");
// for (let i = 0; i < fifoArray.length; i++) {
//   document.write("<li>" + fifoArray[i] + "</li>");
// }
// document.write("</ul>");

// document.write("<h2>Accessing Values in FIFO Order:</h2>");
// while (fifoArray.length > 0) {
//   let value = fifoArray.shift();
//   document.write("<p>Value: " + value + "</p>");
// }

// Question # 14
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h2>Phone Manufacturers:</h2>");
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");





