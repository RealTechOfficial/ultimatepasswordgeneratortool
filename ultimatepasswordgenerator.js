 const Numbers = "0123456789";
    const Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const Symbols = "@#£_&-+()/*?€¥$%{}[]";
    const numeralClass = document.querySelector('.js-numbers');
    const alphaClass = document.querySelector('.js-alphabet');
    const symbolsClass = document.querySelector('.js-symbol');
    const combineClass = document.querySelector('.js-combine');
    const resultShow = document.querySelector('.js-GeneratedPass');
    const selectClass = document.querySelector('.js-select');
    const executeButton = document.querySelector('.js-generated-button');
    executeButton.addEventListener('click',()=>{
     const selecting = selectClass.value;
     
     const passwordLength = document.querySelector('.js-password-length');
     const passLengthSelect = passwordLength.value;
          let length = "";
     if(passLengthSelect === "8") {
       length = 8
     }else if(passLengthSelect === "12"){
       length = 12
     }else if(passLengthSelect === "24"){
       length = 24
     }else {
       alert('please select a password strength')
     }
     let character = "";
     if(selecting === "Numeral Only") {
       character = Numbers;
     } else if(selecting === "Alphabet Only"){
       character = Alphabets;
     } else if(selecting === "Symbol only"){
       character = Symbols;
     } else if(selecting === "Combination"){
       character = Numbers + Alphabets + Symbols
     } else {
       alert('please select an option')
       return;
     }
     let password = "";
     for(let i = 0; i < length; i++){
       const randomIndex = Math.floor(Math.random() * character.length )
       password += character[randomIndex]
     }
     resultShow.value = password;
     copyButton.disabled = !resultShow.value;
     copyButton.style.background = 'green'
    });
    const copyButton = document.querySelector('.js-copy-button');
    const resultBox = document.querySelector('.js-GeneratedPass');
     copyButton.disabled = true;
     copyButton.style.background = 'grey';
   copyButton.addEventListener('click',async ()=> {
     try {
       await navigator.clipboard.writeText(resultBox.value)
       alert('text copied')
     } catch (error) {
       console.error('Error copying to clipboard', error)
     }
     
   });