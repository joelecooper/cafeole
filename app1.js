function getUserName(){
    let userName = prompt('Please Enter your Name: ');
    
    if (userName == 'Joel'){
    document.write('<h3> A true connoisseur of coffee has blessed this page and his name is Joel');
    } else {
    document.write('<h3>' + 'Hey! Welcome to Cafeole, ' +  userName + '<h3>');
    }
}

function getConfirmation(){
    let confirmation = prompt('Do you like coffee? Give us a Yes or No!');

    if (confirmation == "Yes"){
    document.write('<h3>' + 'Welcome fellow coffee lover!');
    }   else {
    document.write('<h3>' + 'Let us show you what coffee is about!');
    }
}

function getStarbucks(){
    let starbucks = prompt('What is the best Starbucks drink?')

    if (starbucks == "None"){
    document.write('<h1>' + 'You are right, there are no good Starbucks drinks!');
    }
    else{
    document.write('<h1>' + 'You are wrong! There are no good Starbucks drinks. Check out our menu for real coffee')
    }
}