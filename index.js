//challenge 1
const marks = Number(prompt("Enter student marks (0-100):"));
//The user is prompted to enter a number between 0-100, is not, a string will be displayed.

let grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "E";

  return grade;
}
//the code finds where the marks lie in the chart and gives a grade.
console.log(`Grade: ${grade}`);

//challenge 2
const speed = 80;

if (speed < 70) {
  console.log("Ok");
} else {
  const points = Math.floor((speed - 70) / 5);
  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${points}`);
  }
}

//challenge 3

function validateNetPay()
{
	// Capture gross pay, non-cash benefits and allowable deductions
	let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
	let benefits = parseFloat(prompt("Enter Non-Cash Benefits:"));
	let allowDeducts = parseFloat(prompt("Enter Allowable Deductions:"));
  
	
	if (basicSalary < 0) 
	{
		alert("Gross pay cannot be less than zero.");
		return false;
	}

	if (benefits < 0) 
	{
		alert("Non-cash benefits cannot be less than zero.");
		return false;
	}
		
	if (allowDeducts < 0) 
	{
		alert("Allowable deductions cannot be less than zero.");
		return false;
	} 
	
	else return true;
}
//calculating taxable income
let taxableIncome = basicSalary + benefits - personalRelief - insuranceRelief;
//calculating PAYEtax
function payAsYouEarn(basicSalary) {
  if (taxableIncome <= 24000)
  payAsYouEarn= taxableIncome*0.1
  
  else if (taxableIncome <= 32333)
  payAsYouEarn = taxableIncome*0.25

  else if (taxableIncome >= 32334)
  payAsYouEarn= taxableIncome*0.3
}
//calculating NHIF contributions

function calculateNHIF(basicSalary) {
	let deduction = 0;
  
	if (basicSalary <= 5999) {
	  deduction = 150;
	} else if (basicSalary >= 6000 && basicSalary <= 7999) {
	  deduction = 300;
	} else if (basicSalary >= 8000 && basicSalary <= 11999) {
	  deduction = 400;
	} else if (basicSalary >= 12000 && basicSalary <= 14999) {
	  deduction = 500;
	} else if (basicSalary >= 15000 && basicSalary <= 19999) {
	  deduction = 600;
	} else if (basicSalary >= 20000 && basicSalary <= 24999) {
	  deduction = 750;
	} else if (basicSalary >= 25000 && basicSalary <= 29999) {
	  deduction = 850;
	} else if (basicSalary >= 30000 && basicSalary <= 34999) {
	  deduction = 900;
	} else if (basicSalary >= 35000 && basicSalary <= 39999) {
	  deduction = 950;
	} else if (basicSalary >= 40000 && basicSalary <= 44999) {
	  deduction = 1000;
	} else if (basicSalary >= 45000 && basicSalary <= 49999) {
	  deduction = 1100;
	} else if (basicSalary >= 50000 && basicSalary <= 59999) {
	  deduction = 1200;
	} else if (basicSalary >= 60000 && basicSalary <= 69999) {
	  deduction = 1300;
	} else if (basicSalary >= 70000 && basicSalary <= 79999) {
	  deduction = 1400;
	} else if (basicSalary >= 80000 && basicSalary <= 89999) {
	  deduction = 1500;
	} else if (basicSalary >= 90000 && basicSalary <= 99999) {
	  deduction = 1600;
	} else if (basicSalary >= 100000) {
	  deduction = 1700;
	}
  
	return deduction;
  }

  //net pay
  const netPay = basicSalary - (payAsYouEarn + deduction)





				
