const maPromesse = new Promise((resolve, reject) => {
    const alea = Math.floor(Math.random() * 6);


    // simulate an async operation with setTimeout
    setTimeout(() => {

        if (alea > 3) {
            resolve('Operation succeded ')
        } else {
            reject('Operation rejected ')
        }

    }, 2000)


    //executes before the timeout
    console.log(alea)
});


maPromesse.then(result => {

    // capture the resolve value with .then
    console.log(result);
}).catch(refused => {
    // capture the reject value with .catch
    console.log(refused)
}).finally(() => {

    // finally is always executed
    console.log('Operation finished!')
})