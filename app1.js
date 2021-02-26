let userName = prompt('Please Enter your Name: ');

if (userName == 'Joel'){
    document.write('<h3> A true connoisseur of coffee has blessed this page and his name is Joel');
} else {
    document.write('<h3>' + 'Hey! Welcome to Cafeole, ' +  userName + '<h3>');
}