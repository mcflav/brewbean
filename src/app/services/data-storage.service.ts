import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { OrderService } from '../services/order.service';
import { Users } from '../shared/users.model';
import { User } from '../shared/user.model'
import { Order } from '../shared/order.model';
import { UserLogin } from '../shared/userLogin.model';
import { catchError, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject } from 'rxjs';

interface StoreUserResponseData{
    email: string,
    firstname: string,
    isAdmin: boolean,
    lastname: string
}

interface ValidateUserResponseData {
    auth: boolean,
    token: string,
}

interface StoreOrderResponseData{
    id?: string,
    coffee: string,
    creamer: string,
    topping: string,
    syrup: string,
    sweetener: string,
    price: number,
    quantity: number,
    subtotal: number,
    user: string
}

@Injectable({providedIn: 'root'})
export class DataStorageService {
    user = new BehaviorSubject<User>(null);
    orders: [] = [];
    private tokenExpirationTimer: any;
    private _expirationDate = new Date(
        new Date().getTime() + 86400 * 1000
    );

    constructor(private http: HttpClient, 
        private usersService: UsersService,
        private orderService: OrderService,
        private router: Router){}
    
    // storeUser(user: Users){
    //     const body = user;
                
    //     //const users = this.usersService.getUsers();
    //     // this.http.post('https://warm-dusk-21815.herokuapp.com/api/v1/users', body, {headers:
    //     //     {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    //     // })
    //     this.http.post('https://warm-dusk-21815.herokuapp.com/api/v1/users', body)
    //     .subscribe(data => {
    //         console.log(data);
    //     });
    // }

    storeUser(user: Users){
       const body = user;
       return this.http.post<StoreUserResponseData>('https://warm-dusk-21815.herokuapp.com/api/v1/users', 
        body).pipe(catchError(this.handleError));
    }

    storeOrder(order: Order){
        const body = order;
        return this.http.post<StoreOrderResponseData>('https://warm-dusk-21815.herokuapp.com/api/v1/orders', body)
            .pipe(catchError(this.handleError));
    }

    fetchUsers(){
        return this.http.get<Users[]>('https://warm-dusk-21815.herokuapp.com/api/v1/users')
            .pipe(catchError(this.handleError));
    }

    fetchOrders(userId: string){
        console.log(userId);
        return this.http.post('https://warm-dusk-21815.herokuapp.com/api/v1/orders/getOrder', 
            {
                user: userId
            }
        ).pipe(catchError(this.handleError));
    }

    validateUser(user: UserLogin){
        const body = user;
        return this.http.post<ValidateUserResponseData>('https://warm-dusk-21815.herokuapp.com/api/v1/authentication',
            body).pipe(catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.auth,
                    resData.token
                );
            })
        );
    }

    autoLogin() {
        const userData: {
            auth: boolean;
            _token: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }

        const loadedUser = new User(
            userData.auth,
            userData._token,
            this._expirationDate
        );

        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration = 
                new Date(this._expirationDate).getTime() - new Date().getTime();
        }
    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    private handleAuthentication(auth: boolean, token:string){
        const expirationDate = new Date(
            new Date().getTime() + 86400 * 1000
        );

        const user = new User(
            auth,
            token,
            expirationDate
        );
        this.user.next(user);
        this.autoLogout(86400 * 1000);

        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage;
        console.log(errorRes.error);
        errorMessage = 'An error occurred.';
        return throwError(errorMessage);
    }
}
