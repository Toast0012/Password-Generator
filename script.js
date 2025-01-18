let lower = true;
let upper = true;
let numbers = true;
let symbols = true;

const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
const numbersChars = '0123456789'
const symbolsChars = '!@#$%^&*'

const displayGenerated = document.getElementById('generated');

const toggleLower = (() => {lower = !lower;})
const toggleUpper = (() => {upper = !upper})
const toggleNumbers = (() => {numbers = !numbers})
const toggleSymbols = (() => {symbols = !symbols})

function generatePassword() {
    let passLength = document.getElementById('length').value;
    if (passLength === '') {
        passLength = Math.floor(Math.random() * (32-16+1)) + 16;
    } else {
        Number(passLength) <= 32 && Number(passLength) >= 16 ? passLength : alert('Invalid Input. (Leave Blank for a Random length)')
    }

    let chars = '';
    lower ? chars += lowerChars : chars;
    upper ? chars += lowerChars.toUpperCase() : chars;
    numbers ? chars += numbersChars : chars;
    symbols ? chars += symbolsChars : chars; 

    chars === '' ? alert('Select at least one character set') : chars;

    let password = '';
    for (let i = 0; i < passLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    displayGenerated.textContent = password;
}

const copy = (() => {
    const copyText = document.getElementById('generated').textContent;
    navigator.clipboard.writeText(copyText);
})