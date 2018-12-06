const p = new Promise((resolve, reject) => {
    // start the async work from the promise
    // Once the async has completed it will return the promise to the consumer.
    setTimeout(()=>{
        reject(new Error('Epic Fail'))
    }, getRandom(2000,3000));
    setTimeout(()=>{
        resolve(2)
    },getRandom(2000,3000));
})

p.then(result => console.log(result))
 .catch(err => console.log('Error: ', err.message))

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}