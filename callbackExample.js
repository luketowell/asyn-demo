console.log('Start');

//retrieve user information
getUser(1, displayUser);

// retrieve fictional user address
getAddress("luke", displayAddress)

// end of files
console.log("End");

function displayUser(user){
    console.log(user);
} 

function displayAddress(address){
    console.log(address)
}
function getUser(id, callback){
    setTimeout(() => {
        console.log("called");
        callback({
            id: id,
            firstName: "Bilbo",
            lastName: "Baggins"
        });
    }, 2000)
}

function getAddress(username, callback){
    setTimeout(()=> {
        console.log("Retrieving Address");
        callback({
            firstLineAddress: "Bag End",
            secondLineAddress: "Under The Hill",
            State: "Hobbiton",
            Region: "The Shire",
            Country: "Middle Earth"
        });
    }, 2000)
}