class User{
    id:number =0;
    name:string ="";
    email:string="";

    addUser(user:string){
        return `${user} added`;
    }
}

let objUser = new User;
let retult = objUser.addUser("Mazhar");
console.log(retult);