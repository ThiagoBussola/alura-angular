import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { tokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private http: HttpClient,
        private tokenService: tokenService

    ) { }
    
    authenticate(userName: string, password: string) {
        
        return this.http
            .post(
                API_URL + '/user/login', 
                { userName, password }, 
                { observe: 'response' }
            )
            .pipe(tap(res => {
                const authToken = res.headers.get('x-access-token');
                this.tokenService.setToken(authToken);
                console.log(authToken);
            }))
    }
}
