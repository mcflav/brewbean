import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStorageService } from '../services/data-storage.service';
import { map, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private dataStorageService: DataStorageService,
        private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Promise<boolean | UrlTree>
        | Observable<boolean | UrlTree> {
            return this.dataStorageService.user.pipe(
                take(1),
                map(user => {
                    const isAuth = !!user
                    if(isAuth){
                        return true;
                    }
                    return this.router.createUrlTree(['login']);
                })
            );
        }
    }