console.log('before');
getUser(1, (user) => {
    console.log('user', user);
});
console.log("after");

function getUser(id, callback){
    setTimeout(() => {
        console.log("called");
        callback({
            id: id,
            username: "luke"
        });
    }, 2000)
}