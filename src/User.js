"use strict";
class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
    }
    addUser(user) {
        return `${user} added`;
    }
}
let objUser = new User;
let retult = objUser.addUser("Mazhar");
console.log(retult);
