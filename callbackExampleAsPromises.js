console.log('Start');

//retrieve user information
getUser(1)
.then(result => displayUser(result))
.catch(err => console.log(err.message))

// retrieve fictional user address
getAddress("luke")
.then(result => displayAddress(result))
.catch(err => console.log(err.message))

// end of files
console.log("End");

function displayUser(user){
    console.log(user);
} 

function displayAddress(address){
    console.log(address)
}
function getUser(id){
    return new Promise((resolve, reject) => {
        console.log("called");
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