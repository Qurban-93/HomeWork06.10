const personRovshen = {
    firstname: "Rovshan",
    lastname: "Khalilov",
    salary: 1200,
  };
  
  const personElnur = {
    firstname: "Elnur",
    lastname: "Azizov",
    salary: 1800,
  };
  const personQurban = {
    firstname:"Qurban",
    lastname:"Zakiri",
    salary: 3000,
  }

  const personAbdul = {
    firstname:"Abdul",
    lastname: "Seidov",
    salary: 1400
  }


  const employees = [personElnur,personQurban,personRovshen,personAbdul]
  let totalSalary = 0;
  let evenSalary = 0;
 

  employees.forEach((employee)=>{
    totalSalary = totalSalary+employee.salary
    evenSalary = totalSalary/(employees.length-1)
  });

  console.log(evenSalary.toFixed(2));
  

 
//   for (let value = 0; value <= index; index++) {
//     var totalSalary =+ currentValue.salary
// }
// console.log(totalSalary);
