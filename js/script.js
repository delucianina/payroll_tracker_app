// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// const randomEmployee = document.querySelector('#rand-employee-btn');

// STEP ONE:
// Collect employee data:

const collectEmployees = function() {
  const employeesArray = [];
  let whileLoopSwitch;
  // TODO: Get user input to create and return an array of employee objects 
  let firstName;
  let lastName;
  let salary;
  // WHILE LOOP TO ASK FOR EMPLOYEE INFO
  whileLoopSwitch = true; 
  while (whileLoopSwitch) {
    // COLLECT EMPLOYEE INFO
    firstName = prompt('Type employee first name:');
    lastName = prompt('Type employee last name:');
    salary = prompt('Type employee salary:'); 

    if (!firstName || !lastName) {
      alert('You must provide both first and last names');
      // continue will re-run the while loop
      continue;
    } 

    // TODO:  IF NOTHING IS INPUT, SET: salary = 0 
    if (isNaN(salary) || salary === '') {
      salary = 0;
    };
    // CREATE NEW OBJECT TO ADD TO THE ARRAY OF EMPLOYEES 
    const employeeObj = {
      firstName: firstName,
      lastName: lastName,
      // parseInt is converting to number with 2 decimals! Need this later on too
      salary: parseFloat(salary),
    }
    // ADD TO ARRAY 
    employeesArray.push(employeeObj);
    // -----------------------------
    // TEST - ALL OF THIS WORKED! :) 
    // console.log(employeeObj.firstName);
    // console.log("----");
    // console.log(employeesArray);
    // console.log("----");
    // -----------------------------
    // ASK IF THEY WOULD LIKE TO ENTER ANOTHER EMPLOYEE
    whileLoopSwitch = confirm('Would you like to add another employee?');
  }
  // RETURN THE UPDATED STRING
  return employeesArray;
}






// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;
  // USE A FOR LOOP TO COLLECT ALL SALARIES INTO A STRING
  // USE ANOTHER FOR LOOP TO ADD ALL THE SALARIES INTO ONE VARIABLE
  for (const employeeObj of employeesArray) {
    total += parseFloat(employeeObj.salary);
  } 

  const averageSalary = (total / employeesArray.length).toFixed(2);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
} 





// WORKS BUT DOESN'T PASS INSPECTION FOR GRADE?? 
// ALSO WANTS ME TO MAKE 2 OBJECTS... TRY CREATING A NEW OBJECT OUT OF THE RANDOM SELECTION? 

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // CREATE RANDOM NUMBER WITHIN ARRAY LENGTH 
  const randNum = Math.random();
  const index = Math.floor(randNum * employeesArray.length);
  const randEmployeeInfo = employeesArray[index];
  console.log(employeesArray);
  console.log(`Congratulations to ${randEmployeeInfo.firstName} ${randEmployeeInfo.lastName}, our random drawing winner!`);
  return randEmployeeInfo;
}







/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}




const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
