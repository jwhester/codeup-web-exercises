'use strict';
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let languages = users.filter(function (user) {
    return user.languages.length >= 3;
});

let email = users.map(user => users.email);

let totalYears = users.reduce((total, user) =>  {
    return total + users.yearsOfExperience;
},0);

let avgExp = totalYears / users.length;

let longestemail =  emails.reduce((longest, user) => {
    if (email.length > longest.length){
        return email;
    }else{
        return longest;
    }
        }, '');

console.log(longestemail);

const userNames = users.reduce(function (currentString,word) {
    return `${currentString} ${word}`
}, "");
console.log(userNames);
