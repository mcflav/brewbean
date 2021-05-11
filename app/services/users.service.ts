export class UsersService{
    private users = [];

    getUsers(){
        return this.users;
    }

    getUser(email: string){
        const user = this.users.find(
            (u) => {
                return u.email === email;
            }
        );
        return user;
    }

    addUser(userinfo: {email: string, firstname: string, lastname: string, password: string}){
        this.users.push({email: userinfo.email, firstname: userinfo.firstname, lastname: userinfo.lastname, password: userinfo.password});
    }

}