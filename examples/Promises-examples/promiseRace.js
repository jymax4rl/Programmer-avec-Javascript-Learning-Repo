const safe = 2;
const isSafe = safe < 4;


const promise01 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!isSafe) {
            resolve('First control, result is ' + safe + ':' + ' safety requirements passed!');
        } else {
            reject('First control is ' + safe + ':' + ' safety requirements failed!');
        }
    }, 2000);
});


const promise02 = new Promise((resolve, reject) => {


    setTimeout(() => {

        if (isSafe) {
            resolve('Second control, result is ' + safe + ':' + ' safety requirements passed!');
        } else {
            reject('Second control, result is ' + safe + ':' + ' safety requirements failed!');
        }
    }, 4000);
});


Promise.race([promise01, promise02]).then(result => {
    console.log('Result:', result);
}).catch(error => {
    console.error('Error:', error);
}).finally(() => {
    console.log('safety control done!')
});