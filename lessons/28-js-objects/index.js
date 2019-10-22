let user = {
    name: "Batman",
    password: "hunter2",

}
let userTwo = {
    name: "wonderwoman",
    password: 123123,
    greet() {
        console.log('Hello I am ', this.name);
    },
    update(newName) {
        userTwo.name = newName;
    },
}

console.log(user);
console.log(typeof user);

function access(username, password) {
    if(username == user.name && password == user.password) {
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }

}

access("Batman", "hunter2");

userTwo.greet();
userTwo.update("kevin");
userTwo.greet();