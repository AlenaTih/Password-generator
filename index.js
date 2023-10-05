const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateElLeft = document.getElementById("generate-el-left")
// console.log(generateElLeft)

let generateElRight = document.getElementById("generate-el-right")
// console.log(generateElRight)

let pwNum = document.getElementById("pwNumber")
let snackEl = document.getElementById("snackbar");
let pw1 = "password 1"
let pw2 = "password 2"

function generatePassword() {
    refreshPassword()
    pw1 = ""
    pw2 = ""
    for (let i = 0; i < 15; i++) {
        let password1 = characters[ Math.floor( Math.random() * characters.length ) ]
        pw1 += password1
        generateElLeft.textContent += password1
    }
    for ( let i = 0; i < 15; i++) {
        let password2 = characters[ Math.floor ( Math.random() * characters.length ) ]
        pw2 += password2
        generateElRight.textContent += password2
    }
    }

function refreshPassword() {
    generateElLeft.textContent = ""
    generateElRight.textContent = ""
}

//// COPY TO CLIPBOARD ////
function copyToClipboard(side) {
  if (side === 'left') {
      navigator.clipboard.writeText(pw1).then(function() {
          console.log('Copied password1 to clipboard!');
          snackbar(pw1);
      }, function() {
          console.log('Failed to copy password1 to clipboard.');
      });
  } else if (side === 'right') {
      navigator.clipboard.writeText(pw2).then(function() {
          console.log('Copied password2 to clipboard!');
          snackbar(pw2);
      }, function() {
          console.log('Failed to copy password2 to clipboard.');
    })
  }
}

  //// SHOW SNACKBAR ////
//ref: https://www.w3schools.com/howto/howto_js_snackbar.asp
function snackbar(snackbarNeedsAPassword) {
    snackEl.className = "show";
    setTimeout(function(){ snackEl.className = snackEl.className.replace("show", ""); }, 3000);
    pwNum.textContent = snackbarNeedsAPassword
  }
