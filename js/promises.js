'use strict';
let wait = (num) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },num)
});};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function userLastCommit(userName) {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${gitToken}`}})
        .then(data => data.json())
        .then(data => console.log(data[0].created_at));

}

userLastCommit('jwhester');

