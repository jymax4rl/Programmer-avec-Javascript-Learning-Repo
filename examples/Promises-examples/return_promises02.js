const maPromesseWaitTime = 2000;
const maDeuxiemePromessseWaitTime = 4000;

const totalWaitTime = maDeuxiemePromessseWaitTime + maPromesseWaitTime;


const maPromesse = new Promise((resolve, reject) => {


    setTimeout(() => {


        // returned resolve after 2 seconds
        resolve("waited 2 seconds")
    }, maPromesseWaitTime)
});

const maDeuxiemePromessse = new Promise((resolve, reject) => {
    setTimeout(() => {

        // returned resolve after 4 seconds
        resolve('waited 4 seconds, ' + totalWaitTime + ' ms au total')
    }, maDeuxiemePromessseWaitTime + maPromesseWaitTime);
});

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