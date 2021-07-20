import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpParams
} from '@angular/common/http';
import { DataStorageService } from './data-storage.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private dataStorageService: DataStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.dataStorageService.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user){
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    //params: new HttpParams().set('auth', user.token)
                    headers: req.headers.set("x-access-token", 
                        user.token)
                });
                console.log("token: " + user.token);
                console.log("modifiedReq " + modifiedReq);

                return next.handle(modifiedReq);
            })
        );
    }
}