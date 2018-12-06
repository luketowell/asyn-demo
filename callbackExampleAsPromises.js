console.log('Start');

//retrieve user information
getUser(1)
.then(result => getAddress(result))
.then(result => getFriends(result))
.then(result => displayFriends(result))
.catch(err => console.log(err.message))

// retrieve fictional user address
// getAddress("luke")
// .then(result => displayAddress(result))
// .catch(err => console.log(err.message))

// getFriends(3)
// .then(result => displayFriends(result))

// end of files
console.log("End");

function displayUser(user){
    console.log(user);
} 

function displayAddress(address){
    console.log(address)
}

function displayFriends(friends){
    console.log(friends);
}

function getUser(id){
    return new Promise((resolve, reject) => {
        console.log("called getUser");
        setTimeout(() => {
            resolve({
                id: id,
                firstName: "Bilbo",
                lastName: "Baggins"
            });
        }, 2000)
        setTimeout(() => {
            reject(new Error('Cannot get user'));
        }, 3000)
    })
}

function getAddress(username){
    return new Promise((resolve, reject)=>{
        console.log("retrieving Address")
        setTimeout(()=> {
            resolve({
                firstLineAddress: "Bag End",
                secondLineAddress: "Under The Hill",
                State: "Hobbiton",
                Region: "The Shire",
                Country: "Middle Earth"
            });
        }, 2000)
        setTimeout(() => {
            reject(new Error('Cannot get Address'));
        }, 3000)
        
    })
}

function getFriends(id){
    return new Promise((resolve, reject)=>{
        console.log("finding friends");
        setTimeout(()=>{
            resolve({
                friend1: 'Gandalf',
                friend2: 'Gimli',
                friend3: 'Bard',
                friend4: 'Elrond'
            })
        }, 3200)
    })
}

// The two following promises are examples of Settled promises they are essentially promises that have immediately been resolved by the developer.
//they are good for typically mocking out responses in unit tests.
const age = Promise.resolve({age:111});
age.then((result) => {
    console.log(result)
})

const errorObject = Promise.reject(new Error('Failed to retrieve users'));
errorObject.catch((err)=>{
    console.log(err.message);
})