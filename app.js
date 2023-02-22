// var password = prompt("Enter in the password");
//         if (password=="1234") {
//             //location = "media.html"
          
        // else 
        // {
        //   document.getElementById("msg").value = "test";  
        //   //location = "error.html"
        // }
       
        // {
        //     const password = parseInt(prompt(“please input password”))
        // }

        
// 

// console.log('hi');
// let wins = 0;
// let losses = 0;
// let ties = 0;

// const cpuChoices = [
//   "r",
//   "p",
//   "s",
// ];

// const playGame = function () {
//     const playerChoice = prompt('Choose R, P, or S').toLowerCase();
//     if (playerChoice !== 'r' && playerChoice !== 'p' && playerChoice !== 's') {
//       alert("You must choose a valid option");
//       return;
//     }
//     // generate random between 0 ~ 2
//     const randomNum = Math.floor(Math.random() * 3);
//     // choose option for computer
//     const cpuChoice = cpuChoices[randomNum];
//     // first we handle winning conditions
//     console.log(cpuChoice, playerChoice);
//     // if begins
//     if (
//       (cpuChoice === 'r' && playerChoice === 'p') ||
//       (cpuChoice === 'p' && playerChoice === 's') ||
//       (cpuChoice === 's' && playerChoice === 'r')
//     ) {
//       wins++;
//       console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
//     } else if (
//       (playerChoice === 'r' && cpuChoice === 'p') ||
//       (playerChoice === 'p' && cpuChoice === 's') ||
//       (playerChoice === 's' && cpuChoice === 'r')
//     ) {
//       losses++;
//       console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
//     } else {
//       ties++;
//       console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
//     }
//   //  if ends

//     // ask if they want to play again
//     const playAgain = confirm('Do you want to play again?');

//     if (playAgain) {
//       playGame();
//     }
    
//   }
;

        function promptMe(){
        var userPassword = prompt("Please provide a Password");
        alert (userPassword);
        // if block should be here userPassword !== userPassword.length <= 8 
        var passwordLenght = prompt("Please make password at least 8 characters long");
        alert (userPassword);
        var passwordChar = prompt("Please include at least one of the following; lowercase, uppercase, numeric, and/or special characters");
        alert (userPassword);
        // work with the || sign, looking in to using split method
}
// if { const userPassword !== function text.passwordLenght }

       
//         const passwordCrit = function () {
//             const passwordLenght = prompt('Make password at least 8 characters long').toLowerCase();
            // if (playerChoice !== 'r' && playerChoice !== 'p' && playerChoice !== 's') {
            //   alert("You must choose a valid option");
            //   return;
            // }