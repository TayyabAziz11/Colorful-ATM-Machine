#! /usr/bin/env node
import inquirer from "inquirer" ;
import chalk from "chalk"

// user balance and pin code 
let mybalance = 100000;
let mypin = 1234;

// print welcome message 
console.log( chalk.red("\n \twelcome to simple ATM machine\n"));

let pinanswer = await inquirer.prompt(
  [
     {
          name: "pin" ,
          message : chalk.blue("Please enter your 4 digit PIN") ,
          type : "number"
        }

 ]
)
if (pinanswer.pin === mypin) {
  console.log(chalk.green("\n \tPin is correct, login sucessful\n"));

  let operationanswer = await inquirer.prompt(
    [
      {
        name: "operation",
        message: "select an operation",
        type: "list",
        choices: ["Withdraw" , "Check Balance"],
      }
    ]
  )
if (operationanswer.operation === "Withdraw"){

  let Withdrawanswer = await inquirer.prompt(
    [
      {
        name: "Withdrawmethod",
        message: "Select a Withdraw Method",
        type: "list",
        choices: ["Fast cash" , "Enter amount"],
      }
    ]
  )
if (Withdrawanswer.Withdrawmethod === "Fast cash"){
  let Fastcashanswer = await inquirer.prompt(
    [
      {
        name: "Fastcash",
        message: "Select Amount",
        type: "list",
        choices: [1000 , 5000 , 10000 , 20000 , 50000 , 100000 , 200000]
      }
    ]
  )
if (Fastcashanswer.Fastcash > mybalance){
  console.log(chalk.red("insufficient Balance"));
}
else {
  mybalance -= Fastcashanswer.Fastcash
  console.log(`${Fastcashanswer.Fastcash} Withdraw Successfully`)
  console.log(`Your remaining Balance is: ${mybalance}`);
}
}
  else if (Withdrawanswer.Withdrawmethod === "Enter amount"
  ){
    let amountanswer = await inquirer.prompt(
      [
        {
          name: "amount",
          message: "enter amount",
          type: "number",
        }
      ]
    ) 
    if (amountanswer.amount > mybalance){
      console.log(chalk.red("insufficient Balance"));
    }
    else {
      mybalance -= amountanswer.amount;
      console.log(`${amountanswer.amount} Withdraw successfully`);
      console.log(`your remaining Balance is: ${mybalance}`);
    }
  }
}

else if (operationanswer.operation === "Check Balance"){
  console.log(`Your current Blance is: ${mybalance}`)
}
}
else{
  console.log(chalk.redBright("\n \tYou enter a wrong PIN\n"))
}