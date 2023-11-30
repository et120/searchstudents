let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");

let studentName = document.getElementById("studentName");
let studentNumber = document.getElementById("studentNumber");
let studentEmail = document.getElementById("studentEmail");


let students;

// Create a function that gets our students
// Create a function that organizes data
// Event that displays data

function getStudent(){
    fetch('../data/studentList.json')
    .then(
        promise => promise.json()
    )
    .then(
        data => {
            students = data.StudentList;
            return students;
        }
    )
}

getStudent();