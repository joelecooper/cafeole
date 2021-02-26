'use strict'

let userName = prompt('Please Enter your Name: ');

document.write('<h3>' + userName + '<h3>')

if (userName == 'Joel'){
    document.write('<h3> A true connoisseur of coffee has blessed this page and his name is Joel');
} else {
    document.write('<h3>' + 'Hey! Welcome to Cafeole,' + userName + '<h3>');
}