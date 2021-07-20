import { Users } from '../shared/users.model';
import { Subject } from 'rxjs';

export class UsersService{
    usersChanged = new Subject<Users[]>();

    private users: Users[] = [];
    validLogin;

    setUsers(users: Users[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers(){
        return this.users.slice();
    }

    getUser(email: string){
        const user = this.users.find(
            (u) => {
                return u.email === email;
            }
        );
        console.log("user");
        console.log(user);
        return user;
    }

    addUser(user: Users){
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
    }

    // loginUser(validLogin: boolean){
    //     this.validLogin = validLogin;
    //     console.log("loginUser");
    //     console.log(this.validLogin);
    // }

    // checkLogin(){
    //     return this.validLogin;
    // }


    // addUser(userinfo: {email: string, firstname: string, lastname: string, password: string}){
    //     this.users.push({email: userinfo.email, firstname: userinfo.firstname, lastname: userinfo.lastname, password: userinfo.password});
    // }

}