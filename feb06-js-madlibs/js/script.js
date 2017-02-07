var userResp = confirm('are you a boy?');
if(userResp){
    alert('yay. youre a boy');
    var gender = 'boy';
}else{
    alert('you are a girl');
    var gender = 'girl';
}
var userGender = 'welcome young ' + gender;
alert(userGender);

var name = prompt('What is your name?');
alert(name + '? What a weird name, you should probably get it changed...')

var nameList = 'Kevin, David, Cobi, King Pickles, Stan';
var truName = prompt('What name would you like because the one you had was utter garbage ' + nameList);
alert(truName + ' , ah, thats better, now you need to answer a list of questions ok?')

/* ----QUESTIONS---- */
var falSt = prompt('Well you dont really have a choice, now, is your place in the U.S.? (answer true or false)');
if(falSt = 'true'){
    alert("ok good youre telling the truth... for now");
}else{
    alert('liar, restart');
}
var age = prompt("What's your age?");
console.log( parseInt(age));
var thing = prompt("Name an object, such as a lamp or book");
var person = prompt("Name a random person");
var place = prompt("Name a place");
var float = prompt("Put in a number that has a decimal in it");
var bin = prompt("Name something that you'd put something in, example a trashcan");
var personTwo = prompt("Name another person");
confirm('Is ' + thing + ' what you entered?');
confirm('Is ' + person + ' what you entered?');
confirm('Is ' + place + ' what you entered?');
confirm('Is ' + float + ' what you entered?');
alert('Story time my little ' + truName + ' good luck...');
alert('There once was a child named ' + truName + ', ' + truName + ' was a good kid, until one day at ' + place + ' ' + truName + ' meet up with their friend ' + person);
alert(person + ' was not so good litte ' + truName + ' found out, while they were eating lunch ' + truName + ' discovered that ' + person + ' stole their chocolate pudding. This made ' + truName + ' very angry.');
alert(truName + ' was so angry he picked up the nearest thing, which happened to be ' + thing + '. ' + truName + ' hit ' + person + ' over their head with it and watched as poor little ' + person + ' fell down unconsious');
alert(truName + ' realized what he had done and put the ' + thing + ' inside a ' + bin+ '. Then ' + truName + ' ran all the way home and hoped no one saw what happened.... ');
alert('The next day ' + truName + ' woke up to a loud bang and soon found that a S.W.A.T. team had broken through the door and surrounded the bed with MP5 submachine guns pointed directly at their head. One of the S.W.A.T. Officers hit ' + truName + ' in the forehead with the butt of the gun.' );

alert('Our little antagonist came too in a questioning room handcuffed to the table and a very angry looking individual sitting opposite of them.');

alert('Why did you beat down ' + person + ' in cold blood? Was it for pleasure, anger?! asked the angry man');
alert('"He stole my pudding" cried ' + truName + ' with snot and tears pouring down their face.');

alert('"You sadistic bastard, youre going away for a long time, especially with the testimony of ' + personTwo + '". ' + truName + ' didnt know of someone with the name of ' + personTwo + ' but knew that when they got out of prison they would make them pay for putting him behind bars.');
alert('Several months pass as the long and tuff trial take place, but on the last day the prosecutor brought ' + personTwo + ' to the stand. ' + truName + ' didnt even hear what they said because ' + truName + ' knew that vengeance would come soon.');
alert(truName + 's focus broke when the frase "Guilty" flew through the air. The judge continued with "We sentence ' + truName + ' to be executed by Electric Chair."');
alert('I wish I could tell you that the sentence was revoked but it wasnt. The sad thing is about the night of the execution is that no one besides the Executioner and the Guards came to witness the death, that was because no one liked or cared about ' + truName + ' after what happened at ' + place + ' ... no one at all');
