const maPromesse = new Promise((resolve, reject) => {


    setTimeout(() => {


        // returned resolve after 2 seconds
        resolve("waited 2 seconds")
    }, 2000)
});

const maDeuxiemePromessse = new Promise((resolve, reject) => {
    setTimeout(() => {

        // returned resolve after 4 seconds
        resolve('waited 4 seconds')
    }, 4000);
})

maPromesse.then(succes => {
    console.log(succes)

    //return the maDeuxiemePromessse to chain it with .then()
    return maDeuxiemePromessse;
}).then(deuxieme_success => {
    console.log(deuxieme_success)
}).catch(failed => {
    console.log(failed)
}).finally(() => {
    console.log('All promises are done!')
});