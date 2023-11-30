let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");

let studentName = document.getElementById("studentName");
let studentNumber = document.getElementById("studentNumber");
let studentEmail = document.getElementById("studentEmail");


let students;
let matchingStudent;

// Create a function that gets our students
// Create a function that organizes data
// Event that displays data


// function getStudent(){
//     fetch('../data/studentList.json')
//     .then(
//         promise => promise.json()
//     )
//     .then(
//         data => {
//             students = data.studentList;
//             console.log(students);
//             return students;
//         }
//     )
// }

async function getStudent(){
    const promise = await fetch('../data/studentList.json');

    const data = await promise.json();

    students = data.studentList;

    return students;
}

function findStudent(){
    let studentInput = userInput.value.toLowerCase();

    for(let i = 0; i < students.length; i++){
        let currentStudent = students[i]

        if(currentStudent.firstName.toLowerCase() === studentInput){
            matchingStudent = currentStudent
        }
    }

    if(matchingStudent){
        studentName.innerText = matchingStudent.firstName + " " + matchingStudent.lastName;
        studentNumber.innerText = matchingStudent.phoneNumber;
        studentEmail.innerText = matchingStudent.email;
    }else{
        studentName.innerText = "Student not found";
    }
}

submitBtn.addEventListener(('click'), function(e){
    findStudent();
})

getStudent();