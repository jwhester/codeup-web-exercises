var movie = 3;
var mermaid = movie * 3;
var bear = movie * 5;
var hercules = movie;
console.log(mermaid + bear + hercules);

var google = 400;
var amazon = 380;
var facebook = 350;
var week = (google * 6) + (amazon * 4) + (facebook * 10);
console.log(week);

var classNotFull = true;
var classSchedule = true;
console.log(classNotFull && classSchedule);

var moreThan2 = true;
var offer = true;
var premium = true;
console.log((moreThan2 || premium) && offer);

var username = 'codeup';
var password = 'notastrongpassword';

var password5 = password.length > 5;
var passwordNoUsername = username !== password;
var username20 = username.length < 20;
var noWhitesAllowed = username === username.trim() && password === password.trim();

password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim();
