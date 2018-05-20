import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }

}
