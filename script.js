let generate = document.getElementById("generate");
let output = document.getElementById("out");
let input = document.getElementById("size");
let upp = document.getElementById("caps");
let low = document.getElementById("small");
let num = document.getElementById("numbers");
let sym = document.getElementById("sym");
let copy = document.getElementById("copy-button");
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "<", ">", "{", "}", "{", "}", "`", "~", ":", "+", "-","?"];


generate.addEventListener('click', () => {
    let arr = [], i = 0, numb;
    let str = "";
    if (upp.checked) {
        arr.push("upper");
    }
    if (low.checked) {
        arr.push("lower");
    }
    if (num.checked) {
        arr.push("number");
    }
    if (sym.checked) {
        arr.push("symbol");
    }

    if (upp.checked || low.checked || num.checked || sym.checked) {
        while (i < input.value) {
            let n = Math.floor(Math.random() * (arr.length));

            if (arr[n] == "upper") {
                numb = Math.floor(Math.random() * (upperCase.length));
                str += upperCase[numb];
            }
            else if (arr[n] == "lower") {

                numb = Math.floor(Math.random() * (lowerCase.length));
                str += lowerCase[numb];
            }
            else if (arr[n] == "number") {
                numb = Math.floor(Math.random() * (numbers.length));
                str += numbers[numb];
            }
            else {
                numb = Math.floor(Math.random() * (symbols.length));
                str += symbols[numb];
            }
            output.value = str;
            i++;
        }
    }
    else {
        output.value = "Please, Select the type of characters"
    }
});

copy.addEventListener('click',()=>{
    // output.select();
    navigator.clipboard.writeText(output.value);
});